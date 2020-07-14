'use strict';
const faker = require('faker');
const { random, round } = Math;
const userCount = round(random() * 100);
const userArray = [];
  for (let i=0; i < userCount; i++) {
    userArray.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
        await queryInterface.bulkInsert('users', userArray)
    ]
  },

  down: (queryInterface, Sequelize) => {}
};
