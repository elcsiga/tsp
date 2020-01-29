const faker = require('faker');
const helpers = require('../helpers.js');

const R = (arr) => arr[Math.floor(Math.random() * arr.length)];

module.exports = Array(helpers.count.project).fill(true).map((o, i) => ({
    id: i + 1,
    name: faker.commerce.productAdjective() + ' ' + helpers.random(['Gardens', 'Estate', 'House', 'Tower', 'Hall', 'Plaza', 'Studio']),
    description: faker.lorem.sentence(),
    thumbnail: helpers.thumbnail(),
    address: helpers.address()
}));