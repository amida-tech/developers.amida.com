var hl = require('highlight').Highlight;
var fs = require('fs');

var html = fs.readFileSync('app/elements/bb-models/model-document-schema.html','utf-8')
console.log(html)
// app/elements/bb-models/model-document-schema.html
console.log(hl(html,false,true))
