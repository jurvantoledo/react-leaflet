'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Nfts', [{
      hash: '8199114056050478354752723974961328699490488924502107075618029065475874357249',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Nfts', null, {});
  }
};
