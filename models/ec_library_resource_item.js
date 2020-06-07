'use strict';
module.exports = (sequelize, DataTypes) => {
  const EC_LIBRARY_RESOURC_ITEM = sequelize.define('EC_LIBRARY_RESOURCE_ITEM', {
    LIBRARY_RESOURCE_ID: DataTypes.INTEGER,
    STATUS: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName: 'EC_LIBRARY_RESOURCE_ITEM'
  });
  EC_LIBRARY_RESOURC_ITEM.associate = function(models) {
    // associations can be defined here
  };
  return EC_LIBRARY_RESOURC_ITEM;
};
