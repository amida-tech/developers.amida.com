"use strict";

var bb = require("blue-button");
var meta = require("blue-button-meta");
var fs = require("fs");
var ejs = require('ejs');


meta.supported_sections = [
    {"id":"document_model", "title":"Main", "section":""},
    {"id":"shared", "title":"Shared Schemas", "section":""},
    {"id":"demographics", "title":"Demographics", "section":"demographics"},
    {"id":"allergy", "title":"Allergies", "section":"allergies"},
    {"id":"encounter", "title":"Encounters", "section":"encounters"},
    {"id":"immunization", "title":"Immunizations", "section":"immunizations"},
    {"id":"medication", "title":"Medications", "section":"medications"},
    {"id":"problem", "title":"Problems", "section":"problems"},
    {"id":"procedure", "title":"Procedures", "section":"procedures"},
    {"id":"result", "title":"Results", "section":"results"},
    {"id":"social_history", "title":"Social History", "section":"social_history"},
    {"id":"vital", "title":"Vitals", "section":"vitals"},
    {"id":"insurance", "title":"Insurance", "section":"insurance"},
    {"id":"claims", "title":"Claims", "section":"claims"}
]

var ccda = fs.readFileSync("_samples/ccda.xml").toString();


while (ccda.search("\t")>0){
    ccda=ccda.replace("\t"," ");
}

while (ccda.search("  ")>0){
    ccda=ccda.replace("  "," ");
}

//ccda = pd.xml(ccda);

var bb_json=bb.parseString(ccda);
//var bb_json = JSON.parse(fs.readFileSync("_samples/blue-button.json").toString());

for (var i = 0; i < meta.supported_sections.length; i++) {
    //console.log(meta.supported_sections[i].id);
    var schema = fs.readFileSync("node_modules/blue-button/lib/validator/schemas/" + meta.supported_sections[i].id + ".json");
    //console.log(schema.toString());
    schema = schema.toString().replace(new RegExp( "http://local.com/commonModels", "g" ),"");

    var sample="";
    if (meta.supported_sections[i].section){
        var data=bb_json.data[meta.supported_sections[i].section];
        if (data instanceof Array) data=data[0];
        sample=JSON.stringify(data, null, 4);
    }

    var st = '<% include _templates/head %><div class="row"><div class="col-sm-6"><h2>Schema</h2><pre><code class="json" style="font-size:10px;">'+schema+'</code></pre></div><div class="col-sm-6"><h2>Example</h2><pre><code class="json" style="font-size:10px;">'+sample+'</code></pre></div></div><% include _templates/foot %>';

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
