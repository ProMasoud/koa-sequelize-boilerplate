'use strict';
module.exports = (sequelize, DataTypes) => {
  const EC_LIBRARY_RESOURCE = sequelize.define('EC_LIBRARY_RESOURCE', {
    LIBRARY_ID: DataTypes.INTEGER,
    LIBRARY_FOLDER_ID: DataTypes.INTEGER,
    NAME: DataTypes.STRING,
    ICON: DataTypes.STRING,
    STATUS: DataTypes.INTEGER,
    CONTENT_ITEM_HEADING_LABEL: DataTypes.STRING,
    CONTENT_SUB_HEADING_LABEL: DataTypes.STRING
  }, {
    tableName: 'EC_LIBRARY_RESOURCE',
    timestamps: false
  });
  EC_LIBRARY_RESOURCE.associate = function(models) {
    // associations can be defined here
  };
  return EC_LIBRARY_RESOURCE;
};
