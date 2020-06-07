'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EC_LIBRARY_FOLDER', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      LIBRARY_ID: {
        type: Sequelize.INTEGER
      },
      PARENT_ID: {
        type: Sequelize.INTEGER
      },
      NAME: {
        type: Sequelize.STRING(70)
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EC_LIBRARY_FOLDER');
  }
};
