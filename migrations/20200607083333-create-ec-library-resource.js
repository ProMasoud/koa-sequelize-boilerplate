'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EC_LIBRARY_RESOURCE', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LIBRARY_ID: {
        type: Sequelize.INTEGER
      },
      LIBRARY_FOLDER_ID: {
        type: Sequelize.INTEGER
      },
      NAME: {
        type: Sequelize.STRING(70)
      },
      ICON: {
        type: Sequelize.STRING(15)
      },
      STATUS: {
        type: Sequelize.INTEGER
      },
      CONTENT_ITEM_HEADING_LABEL: {
        type: Sequelize.STRING(70)
      },
      CONTENT_SUB_HEADING_LABEL: {
        type: Sequelize.STRING(70)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EC_LIBRARY_RESOURCE');
  }
};
