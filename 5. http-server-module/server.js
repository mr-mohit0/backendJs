const http = require('http');
const post = 3000;
const request = require('./request-handler');
const server = http.createServer(request);
server.listen(post, () => {
    console.log(`http://localhost:${post}`);
}) 








//  const { exec } = require("child_process");
// exec("explorer");
// const { spawn } = require("child_process");

// const child = spawn("ping", ["google.com"]);

// child.stdout.on("data", (data) => {
//     console.log(data.toString());
// });

// const os = require('os');
// console.log(os.version());
// console.log(os.userInfo())
// console.log(os.cpus())