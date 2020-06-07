'use strict';
module.exports = (sequelize, DataTypes) => {
  const EC_LIBRARY_RESOURCE_CONTENT_TEXT = sequelize.define('EC_LIBRARY_RESOURCE_CONTENT_TEXT', {
    LIBRARY_RESOURCE_ITEM_ID: DataTypes.INTEGER,
    LIBRARY_RESOURCE_ATTRIBUTE_ID: DataTypes.INTEGER,
    LANGUAGE_ID: DataTypes.INTEGER,
    CONTENT: DataTypes.TEXT
  }, {
    tableName: 'EC_LIBRARY_RESOURCE_CONTENT_TEXT',
    timestamps: false
  });
  EC_LIBRARY_RESOURCE_CONTENT_TEXT.associate = function(models) {
    // associations can be defined here
  };
  return EC_LIBRARY_RESOURCE_CONTENT_TEXT;
};
