const faker = require('faker');
const helpers = require('../helpers.js');

module.exports = Array(helpers.count.partner).fill(true).map((o, i) => ({
   id: i + 1,
   name: faker.fake('{{company.companyName}} {{company.companySuffix}}'),
   line: faker.company.catchPhrase(),
   thumbnail: helpers.thumbnail(),
   address: helpers.address()
}));