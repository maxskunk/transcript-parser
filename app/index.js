// This must be done before you can use any of the fs package functions below
fs = require('fs');
var replaceall = require("replaceall");
//var Regex = require("regex");
console.log('Transcript Parser!')


this.captionContents = "test";


fs.readFile('captions.vtt', 'utf8', function (err, fileContents) {
    if (err) throw err;
    //str.replace(new RegExp(find, 'g'), replace);
    this.captionContents = replaceall("<", "wg", fileContents);
     //fileContents.replaceAll('<','g'); //'<[^>]+>';
    fs.writeFile('output.txt', this.captionContents, function (err) {
            if (err) throw err;
        })
        //console.log(fileContents)
});