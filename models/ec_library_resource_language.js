'use strict';
module.exports = (sequelize, DataTypes) => {
	const EC_LIBRARY_RESOURCE_LANGUAGE = sequelize.define('EC_LIBRARY_RESOURCE_LANGUAGE', {
		LIBRARY_RESOURCE_ID: DataTypes.INTEGER,
		LANGUAGE_ID: DataTypes.INTEGER
	}, {
		tableName: 'EC_LIBRARY_RESOURCE_LANGUAGE',
		timestamps: false
	});
	EC_LIBRARY_RESOURCE_LANGUAGE.associate = function (models) {
		// associations can be defined here
	};
	return EC_LIBRARY_RESOURCE_LANGUAGE;
};
