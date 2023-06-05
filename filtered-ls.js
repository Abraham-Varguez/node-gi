var fs = require("fs");
var path = require("path");

var file = process.argv[2];
var extension = "." + process.argv[3];

fs.readdir(file, function (err, files) {
  if (err) return console.error(err);
  files.forEach(function (file) {
    if (path.extname(file) === extension) {
      console.log(file);
    }
  });
});
