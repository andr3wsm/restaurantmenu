const http = require("http");
const app = require("./app");
const config = require("./config");

const port = 3000;
const server = http.createServer(app);

server.listen(function () {
  console.log('Listening on port', port);
});
