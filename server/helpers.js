const faker = require('faker');
module.exports = {
    address: () => ({
        street: faker.address.streetAddress,
        city: faker.address.city(),
        location: {
            lat: faker.address.latitude(),
            lng: faker.address.longitude()
        }
    }),
    random: (arr) => arr[Math.floor(Math.random() * arr.length)],
    id: (max) => Math.floor(Math.random() * (max-1)) + 1,

    thumbnail: () => 'https://picsum.photos/id/' + Math.floor(Math.random() * 30) + '/400',
    count: {
        project: 5,
        partner: 10,
        user: 20
    }
};