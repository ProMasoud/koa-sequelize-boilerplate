"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("LANGUAGE", {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      NAME: {
        type: Sequelize.STRING(70),
      },
      NAME_LANGUAGE: {
        type: Sequelize.STRING(70),
      },
      STATUS: {
        type: Sequelize.INTEGER,
      },
      LIBRARY: {
        type: Sequelize.INTEGER,
      },
      CREATED_BY: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("LANGUAGE");
  },
};
