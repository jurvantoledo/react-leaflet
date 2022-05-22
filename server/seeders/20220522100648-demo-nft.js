'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Nfts', [{
      hash: '5722',
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Nfts', null, {});
  }
};
