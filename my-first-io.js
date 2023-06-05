const fs = require("fs");

const file = process.argv[2];

let content = fs.readFileSync(file, "utf-8");

console.log(content.toString().split("\n").length - 1);
