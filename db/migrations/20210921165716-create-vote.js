"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Votes", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			answerId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: "Answers",
				},
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: "Users",
				},
			},
			questionId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: "Questions",
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Votes");
	},
};
