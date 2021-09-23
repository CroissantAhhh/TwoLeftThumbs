"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userName: {
				unique: true,
				allowNull: false,
				type: Sequelize.STRING(50),
			},
			email: {
				unique: true,
				allowNull: false,
				type: Sequelize.STRING(255),
			},
			hashedPassword: {
				allowNull: false,
				type: Sequelize.STRING.BINARY,
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
		return queryInterface.dropTable("Users");
	},
};
