"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("EC_LIBRARY", {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      NAME: {
        type: Sequelize.STRING(70),
      },
      DESCRIPTION: {
        type: Sequelize.STRING(256),
      },
      STATUS: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("EC_LIBRARY");
  },
};
