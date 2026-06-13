const http = require("http");
const os = require("os");
const path = require("path");
const fs = require("fs");
const colors = require("colors");

const server = http.createServer((req, res) => {
  res.end("this is my first server");
});

console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());

console.log(__dirname.red.underline);

fs.writeFileSync("message.txt", "We are learning node.js");
const data = fs.readFileSync("message.txt", "utf-8");
console.log(data);

server.listen(5000, () => {
  console.log("server started");
});
