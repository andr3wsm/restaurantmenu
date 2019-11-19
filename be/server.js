const http = require("http");
const app = require("./app");
const config = require("./config");

const port = 8080;
const server = http.createServer(app);

server.listen(config.port, function () {
  console.log('Emax GPS server on port', config.port);
  console.log('config.mongodb.team:', config.mongodb.team);
});


