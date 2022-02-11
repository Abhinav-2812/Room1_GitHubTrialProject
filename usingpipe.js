const fs = require("fs");
var rs = fs.createReadStream("../day1/test.txt");
var ws = fs.createWriteStream("./streamfile.txt");
//pipe data between readstream and writestream 
//pipe function will do read and write
rs.pipe(ws);
console.log("end of program");