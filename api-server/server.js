const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("cities.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

module.exports = server;
