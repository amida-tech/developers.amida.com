"use strict";

var bb = require("blue-button");
var meta = require("blue-button-meta");
var fs = require("fs");
var ejs = require('ejs');

var pd=require("pretty-data").pd;

var ccda = fs.readFileSync("_samples/ccda.xml").toString();

var xml = require("libxmljs");

var escape = require('escape-html');


var DEFAULT_NS = {
    "h": "urn:hl7-org:v3",
    "xsi": "http://www.w3.org/2001/XMLSchema-instance"
};


meta.supported_sections = [
    {"id":"demographics", "title":"Demographics", "section":"demographics", "oid":"2.16.840.1.113883.10.20.22.2.3"},
    {"id":"allergies", "title":"Allergies", "section":"allergies", "oid":"2.16.840.1.113883.10.20.22.2.6"},
    {"id":"encounters", "title":"Encounters", "section":"encounters", "oid":"2.16.840.1.113883.10.20.22.2.22"},
    {"id":"immunizations", "title":"Immunizations", "section":"immunizations", "oid":"2.16.840.1.113883.10.20.22.2.2"},
    {"id":"medications", "title":"Medications", "section":"medications", "oid":"2.16.840.1.113883.10.20.22.2.1"},
    {"id":"problems", "title":"Problems", "section":"problems", "oid":"2.16.840.1.113883.10.20.22.2.5"},
    {"id":"procedures", "title":"Procedures", "section":"procedures", "oid":"2.16.840.1.113883.10.20.22.2.7"},
    {"id":"results", "title":"Results", "section":"results", "oid":"2.16.840.1.113883.10.20.22.2.3"},
    {"id":"social_history", "title":"Social History", "section":"social_history", "oid":"2.16.840.1.113883.10.20.22.2.3"},
    {"id":"vitals", "title":"Vitals", "section":"vitals", "oid":"2.16.840.1.113883.10.20.22.2.4"},
    {"id":"insurances", "title":"Insurance", "section":"insurance", "oid":"2.16.840.1.113883.10.20.22.2.3"},
    {"id":"claims", "title":"Claims", "section":"claims", "oid":"2.16.840.1.113883.10.20.22.2.3"}
]


while (ccda.search("\t")>0){
    ccda=ccda.replace("\t"," ");
}

while (ccda.search("  ")>0){
    ccda=ccda.replace("  "," ");
}

//ccda = pd.xml(ccda);

var bb_json=bb.parseString(ccda);
var doc = xml.parseXmlString(ccda);



for (var i = 0; i < meta.supported_sections.length; i++) {
    //console.log(meta.supported_sections[i].id);

    var sample="";
    if (bb_json.data[meta.supported_sections[i].section]){
        var data=bb_json.data[meta.supported_sections[i].section];
        if (data instanceof Array) data=data[0];
        sample=JSON.stringify(data, null, 4);
    }

    var node={};

    node=doc.find("//h:section[h:templateId/@root='"+meta.supported_sections[i].oid+"']/h:entry", DEFAULT_NS);

    console.log(node.toString());
    console.log(node);

    node=pd.xml(node.toString());



    var st = '<% include _templates/head %><div class="row"><div class="col-sm-6"><h2>CCDA XML</h2><pre><code class="xml" style="font-size:10px;">'+escape(node)+'</code></pre></div><div class="col-sm-6"><h2>BB JSON</h2><pre><code class="json" style="font-size:10px;">'+sample+'</code></pre></div></div><% include _templates/foot %>';

    var o = fs.writeFileSync("_raw/parsers/ccda/"+meta.supported_sections[i].id+".ejs", st);

}


for (var i = 0; i < meta.supported_sections.length; i++) {
    console.log('<a href="'+meta.supported_sections[i]+'.html">'+meta.supported_sections[i].id+'</a><br/>');

    var input = fs.readFileSync("_raw/parsers/ccda/" + meta.supported_sections[i].id + ".ejs");
    //console.log(schema.toString());

    var st = ejs.render(input.toString(), {filename:"./_templates", sections:meta.supported_sections});

    var o = fs.writeFileSync("_site/parsers/ccda/"+meta.supported_sections[i].id+".html", st);

}












/*
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
*/
