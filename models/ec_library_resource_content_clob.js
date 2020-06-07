'use strict';
module.exports = (sequelize, DataTypes) => {
  const EC_LIBRARY_RESOURCE_CONTENT_CLOB = sequelize.define('EC_LIBRARY_RESOURCE_CONTENT_CLOB', {
    LIBRARY_RESOURCE_ITEM_ID: DataTypes.INTEGER,
    LIBRARY_RESOURCE_ATTRIBUTE_ID: DataTypes.INTEGER,
    LANGUAGE_ID: DataTypes.INTEGER,
    CONTENT: DataTypes.TEXT
  }, {
    tableName: 'EC_LIBRARY_RESOURCE_CONTENT_CLOB',
    timestamps: false
  });
  EC_LIBRARY_RESOURCE_CONTENT_CLOB.associate = function(models) {
    // associations can be defined here
  };
  return EC_LIBRARY_RESOURCE_CONTENT_CLOB;
};
