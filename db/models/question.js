"use strict";
module.exports = (sequelize, DataTypes) => {
	const Question = sequelize.define(
		"Question",
		{
			title: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			body: {
				allowNull: false,
				type: DataTypes.TEXT,
			},
			userId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
		},
		{}
	);
	Question.associate = function (models) {
		Question.belongsTo(models.User, {
			as: "user",
			foreignKey: "userId",
		});
		Question.hasMany(models.Answer, {
			as: "answers",
			foreignKey: "questionId",
		});
		Question.hasMany(models.Vote, {
			as: "votes",
			foreignKey: "questionId",
		});
	};
	return Question;

};
