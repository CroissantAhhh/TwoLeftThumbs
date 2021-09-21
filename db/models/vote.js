"use strict";
module.exports = (sequelize, DataTypes) => {
	const Vote = sequelize.define(
		"Vote",
		{
			answerId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			userId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			questionId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
		},
		{}
	);
	Vote.associate = function (models) {
		Vote.belongsTo(models.User, {
			as: "user",
			foreignKey: "userId",
		});
		Vote.belongsTo(models.Question, {
			as: "questions",
			foreignKey: "questionId",
		});
		Vote.belongsTo(models.Answer, {
			as: "answers",
			foreignKey: "answerId",
		});
	};
	return Vote;
};
