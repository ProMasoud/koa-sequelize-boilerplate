"use strict";
module.exports = (sequelize, DataTypes) => {
  const LANGUAGE = sequelize.define(
    "LANGUAGE",
    {
      NAME: DataTypes.STRING,
      NAME_LANGUAGE: DataTypes.STRING,
      STATUS: DataTypes.INTEGER,
      LIBRARY: DataTypes.INTEGER,
      CREATED_BY: DataTypes.INTEGER,
    },
    {
        timestamps: false,
        tableName: 'LANGUAGE'
    }
  );
  LANGUAGE.associate = function (models) {
    // associations can be defined here
  };
  return LANGUAGE;
};
