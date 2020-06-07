'use strict';
module.exports = (sequelize, DataTypes) => {
  const EC_LIBRARY_FOLDER = sequelize.define('EC_LIBRARY_FOLDER', {
    LIBRARY_ID: DataTypes.INTEGER,
    PARENT_ID: DataTypes.INTEGER,
    NAME: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'EC_LIBRARY_FOLDER'
  });
  EC_LIBRARY_FOLDER.associate = function(models) {
    // associations can be defined here
  };
  return EC_LIBRARY_FOLDER;
};
