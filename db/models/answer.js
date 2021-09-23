"use strict";
module.exports = (sequelize, DataTypes) => {
	const Answer = sequelize.define(
		"Answer",
		{
			body: {
				allowNull: false,
				type: DataTypes.TEXT,
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
	Answer.associate = function (models) {
		Answer.belongsTo(models.User, {
			as: "user",
			foreignKey: "userId",
		});
		Answer.belongsTo(models.Question, {
			as: "questions",
			foreignKey: "questionId",
		});
		Answer.hasMany(models.Vote, {
			as: "votes",
			foreignKey: "answerId",
		});
	};
	return Answer;
};
