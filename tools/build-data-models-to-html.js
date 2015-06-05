var hl = require('highlight').Highlight;
var fs = require('fs');

var htmls = [];
var hlHtmls = [];
var jsonFileNames = [];
var htmlFileNames = [];
/// get the array of file names in the bb-model directory
var path = 'app/elements/bb-models/';
fs.readdir(path,function(err,files){
  //process each file name
  files.forEach(function(curr, index, array){
    // regex for getting filename extenstion
    var extRegex = /(?:\.([^.]+))?$/;
    // filter filenames by extension
    if (extRegex.exec(curr)[1] == "json"){
      // add filenames to jsonFileNames array
      jsonFileNames.push(curr);
    }
    if (extRegex.exec(curr)[1] == "html"){
      // add filenames to htmlFileNames array
      htmlFileNames.push(curr);
    }
  })
  getJsonData();
});

function getJsonData(){
  //pushes the jsonstring of each json files to the htmls array
  jsonFileNames.forEach(function( curr, index, array){
    htmls.push(fs.readFileSync(path + curr, 'utf8'));
  })
  // log(htmls);
  highlightToFile();
}
function highlightToFile(){
  htmls.forEach(function(curr,index,array){
    hlHtmls.push('<pre><code>' + hl(curr) + '</code></pre>')
  })
  log(hlHtmls)
  buildHtmls();
}
function buildHtmls(){
  hlHtmls.forEach(function(curr,index,array){
      var thisFileName = jsonFileNames[index];
      fs.writeFile(path + thisFileName + '.html',curr)
  })
}
// console.log(jsonFileNames)
// var json = fs.readFileSync('document.json','utf8');
// console.log(json)
// html ='<pre><code>' +  hl(json) + '</code></pre>';
// console.log(html)
// fs.writeFile('document.html',html)
// fs.readdir('.',function(err,files){
//   console.log(files)
// })


function log(data){
  console.log(data);
}
