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
		User.hasMany(models.Question, {
			as: "questions",
			foreignKey: "userId",
		});
		User.hasMany(models.Answer, {
			as: "answers",
			foreignKey: "userId",
		});
		User.hasMany(models.Vote, {
			as: "votes",
			foreignKey: "userId",
		});
	};
	return User;
};
