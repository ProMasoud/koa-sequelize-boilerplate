'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EC_LIBRARY_RESOURCE_ATTRIBUTE', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LIBRARY_RESOURCE_ID: {
        type: Sequelize.INTEGER
      },
      ATTRIBUTE: {
        type: Sequelize.INTEGER
      },
      VALUE: {
        type: Sequelize.INTEGER
      },
      RULE: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EC_LIBRARY_RESOURCE_ATTRIBUTE');
  }
};
