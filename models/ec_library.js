"use strict";
module.exports = (sequelize, DataTypes) => {
	const EC_LIBRARY = sequelize.define(
		"EC_LIBRARY",
		{
			NAME: DataTypes.STRING,
			DESCRIPTION: DataTypes.STRING,
			STATUS: DataTypes.INTEGER,
		},
		{
			timestamps: false,
            tableName: 'EC_LIBRARY'
		}
	);
	EC_LIBRARY.associate = function (models) {
		// associations can be defined here
	};
	return EC_LIBRARY;
};
