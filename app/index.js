// This must be done before you can use any of the fs package functions below
fs = require('fs');
var replaceall = require("replaceall");
var Regex = require("regex");
console.log('Transcript Parser!')


this.captionContents = "test";

replaceFunc = function (aString) {
    console.log(aString);
    return ""

}

fs.readFile('captions.vtt', 'utf8', function (err, fileContents) {
    if (err) throw err;
    //str.replace(new RegExp(find, 'g'), replace);
    //this.captionContents = replaceall(new RegExp('<', 'i'), "wg", fileContents);
    var output = fileContents.replace(/<[a-zA-Z\/0-9_][^>]*>/gi, replaceFunc);
    output = output.replace(/-->/gi, replaceFunc);

    output = output.replace(/align:start position:[0-9]{2}%/gi, replaceFunc);
    output = output.replace(/[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}/gi, replaceFunc);
    //fileContents.replaceAll('<','g'); //\<[^>]+>';
    fs.writeFile('output.txt', output, function (err) {
            if (err) throw err;
        })
        //console.log(fileContents)
});