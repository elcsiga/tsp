const faker = require('faker');
const helpers = require('../helpers.js');

module.exports = Array(helpers.count.participant).fill(true).map((o, i) => ({
   id: i + 1,
   projectId: helpers.id(helpers.count.project),
   partnerId: helpers.id(helpers.count.partner),
   line: faker.company.catchPhrase(),
}));