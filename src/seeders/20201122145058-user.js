'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pessoas', [{
      name: 'testando',
      age: '12345',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkDelete('pessoas', null, {});
     
  }
};
