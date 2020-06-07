'use strict';
module.exports = (sequelize, DataTypes) => {
  const EC_LIBRARY_RESOURCE_ATTRIBUTE = sequelize.define('EC_LIBRARY_RESOURCE_ATTRIBUTE', {
    LIBRARY_RESOURCE_ID: DataTypes.INTEGER,
    ATTRIBUTE: DataTypes.INTEGER,
    VALUE: DataTypes.INTEGER,
    RULE: DataTypes.INTEGER
  }, {
    tableName: 'EC_LIBRARY_RESOURCE_ATTRIBUTE',
    timestamps: false
  });
  EC_LIBRARY_RESOURCE_ATTRIBUTE.associate = function(models) {
    // associations can be defined here
  };
  return EC_LIBRARY_RESOURCE_ATTRIBUTE;
};
