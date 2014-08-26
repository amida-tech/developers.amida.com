"use strict";


var fs = require("fs");
var ejs = require('ejs');
var marked = require('marked');


var top_files=["blue-button", "match", "meta", "record"]


//process all top level files (templates)
for (var i = 0; i < top_files.length; i++) {
    var temp = fs.readFileSync("_raw/apis/" + top_files[i] + ".md").toString();

    temp = marked(temp);

    temp = "<% include _templates/head %>"+temp+"<% include _templates/foot %>";

    var st = ejs.render(temp, {filename:"./_templates", sections:{}});

    var o = fs.writeFileSync("_site/apis/"+top_files[i]+".html", st);

}

console.log("blah");

