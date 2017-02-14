// This must be done before you can use any of the fs package functions below
fs = require('fs');
console.log('Transcript Parser!')

this.captionContents = "test";


fs.readFile('captions.vtt', 'utf8', function (err, fileContents) {
    if (err) throw err;
    this.captionContents = fileContents;
    fs.writeFile('output.txt', this.captionContents, function (err) {
            if (err) throw err;
        })
        //console.log(fileContents)
});