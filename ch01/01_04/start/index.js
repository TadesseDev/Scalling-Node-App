/** @format */

const cluster = require("cluster");
const { server } = require("./app");
if (cluster.isMaster) {
  console.log("this is the primary process", process.pid);
  // server.listen(3000);
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  console.log("subprocess", process.pid);
  server.listen(3000);
}
