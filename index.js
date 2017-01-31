"use strict";


var fs = require("fs");
var ejs = require('ejs');


var top_files = ["index", "model", "parsers", "apis"]

var navs = {
    "index": [],
    "model": [
        {"id":"models/document_model", "title":"Main", "section":""},
        {"id":"models/shared", "title":"Shared Schemas", "section":""},
        {"id":"models/demographics", "title":"Demographics", "section":"demographics"},
        {"id":"models/allergy", "title":"Allergies", "section":"allergies"},
        {"id":"models/encounter", "title":"Encounters", "section":"encounters"},
        {"id":"models/immunization", "title":"Immunizations", "section":"immunizations"},
        {"id":"models/medication", "title":"Medications", "section":"medications"},
        {"id":"models/problem", "title":"Problems", "section":"problems"},
        {"id":"models/procedure", "title":"Procedures", "section":"procedures"},
        {"id":"models/result", "title":"Results", "section":"results"},
        {"id":"models/social_history", "title":"Social History", "section":"social_history"},
        {"id":"models/vital", "title":"Vitals", "section":"vitals"},
        {"id":"models/insurance", "title":"Insurance", "section":"insurance"},
        {"id":"models/claims", "title":"Claims", "section":"claims"},
        {"id":"models/discharge_instructions", "title":"Hospital Discharge Instructions", "section":"hospital_discharge_instructions"},
        {"id":"models/hospital_discharge_medications", "title":"Hospital Discharge Medications", "section":"hospital_discharge_medications"},
        {"id":"models/reason_for_referral", "title":"Reason for Referral", "section":"reason_for_referral"},
        {"id":"models/functional_statuses", "title":"Functional Status", "section":"functional_statuses"}
    ],
    "parsers": [
        {"id":"parsers/ccda", "title":"CCDA", "section":""},
        {"id":"parsers/cms", "title":"CMS", "section":""},
        {"id":"parsers/other", "title":"other", "section":""},
    ],
    "apis": [
        {"id":"apis/blue-button", "title":"blue-button.js", "section":""},
        {"id":"apis/match", "title":"match.js", "section":""},
        {"id":"apis/record", "title":"record.js", "section":""},
        {"id":"apis/meta", "title":"meta.js", "section":""},
    ],
}


//process all top level files (templates)
for (var i = 0; i < top_files.length; i++) {
    var temp = fs.readFileSync("_raw/" + top_files[i] + ".ejs").toString();

    var st = ejs.render(temp, {
        filename: "./_templates",
        sections: navs[top_files[i]]
    });

    var o = fs.writeFileSync("_site/" + top_files[i] + ".html", st);

}

console.log("blah");
