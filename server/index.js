const jsonServer = require('json-server');

const db = {
  projects: require('./db/projects.js'),
  partners: require('./db/partners.js'),
  participants: require('./db/participants.js'),
  users: require('./db/users.js')
};

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running')
});