const faker = require('faker');
const helpers = require('../helpers.js');

module.exports = Array(helpers.count.user).fill(true).map((o, i) => ({
   id: i + 1,
   name: faker.name.findName(),
   title: faker.name.jobTitle(),
   avatar: faker.image.avatar(),
   phone: faker.phone.phoneNumber(),
   email: faker.internet.email(),

   partnerId: helpers.id(helpers.count.partner)
}));