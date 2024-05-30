/** @format */

const http = require("http");
const port = parseInt(process.argv[2] || "3000");

const options = [
  "Go for it!",
  "Maybe sleep on it",
  "Do some more research",
  "I don't know",
  "I wouldn't",
];

const server = http.createServer((req, res) => {
  const randomIndex = Math.floor(Math.random() * options.length);
  const payload = JSON.stringify({
    port,
    processID: process.pid,
    advise: options[randomIndex],
  });
  console.info("serving from process", process.pid, "and port of", server.address().port);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(payload);
});

module.exports = { server: server, name: "app name" };

console.log(`advise service running on port ${port}`);
