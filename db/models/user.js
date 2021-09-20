"use strict";
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			userName: {
				unique: true,
				allowNull: false,
				type: DataTypes.STRING(50),
			},
			email: {
				unique: true,
				allowNull: false,
				type: DataTypes.STRING(255),
			},
			hashedPassword: {
				allowNull: false,
				type: DataTypes.STRING.BINARY,
			},
		},
		{}
	);
	User.associate = function (models) {
		// associations can be defined here
	};
	return User;
};
