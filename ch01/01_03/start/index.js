/** @format */
const os = require("os");
const fork = require("child_process").fork;
const processes = [
  fork("./app", [3003]),
  fork("./app", [3000]),
  fork("./app", [3001]),
  fork("./app", [3002]),
];
// console.log(process);

console.log(processes.length);
