const {readFileSync} = require("fs");
// const fs = require("fs");

const space = readFileSync("./solar-system.txt", "utf8");

console.log(space);
