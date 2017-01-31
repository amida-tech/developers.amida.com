"use strict";

var bb = require("blue-button");
var meta = require("blue-button-meta");
var fs = require("fs");
var ejs = require('ejs');
var bbm = require('blue-button-model');

meta.supported_sections = [
    {"id":"document_model", "title":"Main", "section":""},
    {"id":"common_models", "title":"Shared Schemas", "section":""},
    {"id":"header", "title":"Document Header", "section":""},
    {"id":"demographics", "title":"Demographics", "section":"demographics"},
    {"id":"allergy", "title":"Allergies", "section":"allergies"},
    {"id":"encounter", "title":"Encounters", "section":"encounters"},
    {"id":"immunization", "title":"Immunizations", "section":"immunizations"},
    {"id":"medication", "title":"Medications", "section":"medications"},
    {"id":"problem", "title":"Problems", "section":"problems"},
    {"id":"procedure", "title":"Procedures", "section":"procedures"},
    {"id":"result", "title":"Results", "section":"results"},
    {"id":"social_history_entry", "title":"Social History", "section":"social_history"},
    {"id":"plan_of_care_entry", "title":"Plan of Care", "section":"plan_of_care"},
    {"id":"vital", "title":"Vitals", "section":"vitals"},
    {"id":"payer", "title":"Payers", "section":"payers"},
    {"id":"claim", "title":"Claims", "section":"claims"},
    {"id":"discharge_instructions", "title":"Hospital Discharge Instructions", "section":"discharge_instructions"},
    {"id":"hospital_discharge_medications", "title":"Hospital Discharge Medications", "section":"hospital_discharge_medications"},
    {"id":"reason_for_referral", "title":"Reason for Referral", "section":"reason_for_referral"},
    {"id":"functional", "title":"Functional Status", "section":"functional_statuses"}
]

var ccda = fs.readFileSync("_samples/ccda.xml").toString();
var cms = fs.readFileSync("_samples/cms.txt").toString();


while (ccda.search("\t")>0){
    ccda=ccda.replace("\t"," ");
}

while (ccda.search("  ")>0){
    ccda=ccda.replace("  "," ");
}

//ccda = pd.xml(ccda);

var bb_json=bb.parseString(ccda);
var cms_json = bb.parseText(cms);
//var bb_json = JSON.parse(fs.readFileSync("_samples/blue-button.json").toString());

var schemaMap = bbm.schemas.map();

for (var i = 0; i < meta.supported_sections.length; i++) {
    var section = meta.supported_sections[i].section;
    var id = meta.supported_sections[i].id;

    var schema = schemaMap[id];
    if (Array.isArray(schema)) {
    	schema = schema.reduce(function(r, e) {
    		var piece = JSON.stringify(e, undefined, 4);
    		if (r.length > 0) {
    			r += '\n\n';
    		}
    		r += piece;
    		return r;
    	}, "");
    } else {
	    schema = JSON.stringify(schema, undefined, 4);
	}

    if (section && (section !== id)) {
    	var sectionSchema = schemaMap[section];
	    sectionSchema = JSON.stringify(sectionSchema, undefined, 4);
	    schema = sectionSchema + '\n\n' + schema;
    }

    var sample="";
    if (meta.supported_sections[i].section){
        var data = (section === 'claims') ? cms_json.data[section]: bb_json.data[section];
        if (data instanceof Array) data=data[0];
        sample=JSON.stringify(data, null, 4);
    } else if (id === 'document_model') {
		sample = JSON.stringify(bb_json, undefined, 4);
    }

    var st = '<% include _templates/head %><div class="row"><div class="col-sm-6"><h2>Schema</h2><pre><code class="json" style="font-size:10px;">'+schema+'</code></pre></div>';
    if (sample) {
    	st += '<div class="col-sm-6"><h2>Example ('+id+')</h2><pre><code class="json" style="font-size:10px;">'+sample+'</code></pre></div></div><% include _templates/foot %>';
	}
    var o = fs.writeFileSync("_raw/models/"+meta.supported_sections[i].id+".ejs", st);

}

console.log("blah");


for (var i = 0; i < meta.supported_sections.length; i++) {
    console.log('<a href="'+meta.supported_sections[i]+'.html">'+meta.supported_sections[i].id+'</a><br/>');

    var input = fs.readFileSync("_raw/models/" + meta.supported_sections[i].id + ".ejs");
    //console.log(schema.toString());

    var st = ejs.render(input.toString(), {filename:"./_templates", sections:meta.supported_sections});

    var o = fs.writeFileSync("_site/models/"+meta.supported_sections[i].id+".html", st);

}
