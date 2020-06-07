'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EC_LIBRARY_RESOURCE_CONTENT_CLOB', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LIBRARY_RESOURCE_ITEM_ID: {
        type: Sequelize.INTEGER
      },
      LIBRARY_RESOURCE_ATTRIBUTE_ID: {
        type: Sequelize.INTEGER
      },
      LANGUAGE_ID: {
        type: Sequelize.INTEGER
      },
      CONTENT: {
        type: Sequelize.TEXT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EC_LIBRARY_RESOURCE_CONTENT_CLOB');
  }
};
