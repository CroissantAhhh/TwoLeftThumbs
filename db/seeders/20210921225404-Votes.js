"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Votes",
			[
				{
					dir: 1,
					answerId: 1,
					userId: 1,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 1,
					userId: 2,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 1,
					userId: 3,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 1,
					userId: 4,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 1,
					userId: 5,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 1,
					userId: 6,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 2,
					userId: 1,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 2,
					userId: 2,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 2,
					userId: 3,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 2,
					userId: 4,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 2,
					userId: 5,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 2,
					userId: 6,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 3,
					userId: 1,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 3,
					userId: 2,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 3,
					userId: 3,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 3,
					userId: 4,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 3,
					userId: 5,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 3,
					userId: 6,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 4,
					userId: 1,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 4,
					userId: 2,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 4,
					userId: 3,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 4,
					userId: 4,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 4,
					userId: 5,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 4,
					userId: 6,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 5,
					userId: 1,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 5,
					userId: 2,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 5,
					userId: 3,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 5,
					userId: 4,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 5,
					userId: 5,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 5,
					userId: 6,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 7,
					userId: 1,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 7,
					userId: 2,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 7,
					userId: 3,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 7,
					userId: 4,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 7,
					userId: 5,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 7,
					userId: 6,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 8,
					userId: 1,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 8,
					userId: 2,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 8,
					userId: 3,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 8,
					userId: 4,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 8,
					userId: 5,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 8,
					userId: 6,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 9,
					userId: 1,
					questionId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 9,
					userId: 2,
					questionId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 9,
					userId: 3,
					questionId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 9,
					userId: 4,
					questionId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 9,
					userId: 5,
					questionId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 9,
					userId: 6,
					questionId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 10,
					userId: 1,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 10,
					userId: 2,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 10,
					userId: 3,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 10,
					userId: 4,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 10,
					userId: 5,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 10,
					userId: 6,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 11,
					userId: 1,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 11,
					userId: 2,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 11,
					userId: 3,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 11,
					userId: 4,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 11,
					userId: 5,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 11,
					userId: 6,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 12,
					userId: 1,
					questionId: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 12,
					userId: 2,
					questionId: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 12,
					userId: 3,
					questionId: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 12,
					userId: 4,
					questionId: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 12,
					userId: 5,
					questionId: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 12,
					userId: 6,
					questionId: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 13,
					userId: 1,
					questionId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 13,
					userId: 2,
					questionId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 13,
					userId: 3,
					questionId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 13,
					userId: 4,
					questionId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 13,
					userId: 5,
					questionId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 13,
					userId: 6,
					questionId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 16,
					userId: 1,
					questionId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 16,
					userId: 2,
					questionId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 16,
					userId: 3,
					questionId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 16,
					userId: 4,
					questionId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 16,
					userId: 5,
					questionId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 16,
					userId: 6,
					questionId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 18,
					userId: 1,
					questionId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 18,
					userId: 2,
					questionId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 18,
					userId: 3,
					questionId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 18,
					userId: 4,
					questionId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 18,
					userId: 5,
					questionId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 18,
					userId: 6,
					questionId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 18,
					userId: 1,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 18,
					userId: 2,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 18,
					userId: 3,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 18,
					userId: 4,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 18,
					userId: 5,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 18,
					userId: 6,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 19,
					userId: 1,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 19,
					userId: 2,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 19,
					userId: 3,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 19,
					userId: 4,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 19,
					userId: 5,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 19,
					userId: 6,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 20,
					userId: 1,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 20,
					userId: 2,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 20,
					userId: 3,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 20,
					userId: 4,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 20,
					userId: 5,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 20,
					userId: 6,
					questionId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 21,
					userId: 1,
					questionId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 21,
					userId: 2,
					questionId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 21,
					userId: 3,
					questionId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 21,
					userId: 4,
					questionId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 21,
					userId: 5,
					questionId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 21,
					userId: 6,
					questionId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 22,
					userId: 1,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 22,
					userId: 2,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 22,
					userId: 3,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 22,
					userId: 4,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 22,
					userId: 5,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 22,
					userId: 6,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 23,
					userId: 1,
					questionId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 23,
					userId: 2,
					questionId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 23,
					userId: 3,
					questionId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 23,
					userId: 4,
					questionId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 23,
					userId: 5,
					questionId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 23,
					userId: 6,
					questionId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 24,
					userId: 1,
					questionId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 24,
					userId: 2,
					questionId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 24,
					userId: 3,
					questionId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 24,
					userId: 4,
					questionId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 24,
					userId: 5,
					questionId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 24,
					userId: 6,
					questionId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 25,
					userId: 1,
					questionId: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 25,
					userId: 2,
					questionId: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 25,
					userId: 3,
					questionId: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 25,
					userId: 4,
					questionId: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 25,
					userId: 5,
					questionId: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 25,
					userId: 6,
					questionId: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 26,
					userId: 1,
					questionId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 26,
					userId: 2,
					questionId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 26,
					userId: 3,
					questionId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 26,
					userId: 4,
					questionId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 26,
					userId: 5,
					questionId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 26,
					userId: 6,
					questionId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 27,
					userId: 1,
					questionId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 27,
					userId: 2,
					questionId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 27,
					userId: 3,
					questionId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 27,
					userId: 4,
					questionId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 27,
					userId: 5,
					questionId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 27,
					userId: 6,
					questionId: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 28,
					userId: 1,
					questionId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 28,
					userId: 2,
					questionId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 28,
					userId: 3,
					questionId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 28,
					userId: 4,
					questionId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 28,
					userId: 5,
					questionId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 28,
					userId: 6,
					questionId: 11,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 29,
					userId: 1,
					questionId: 13,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 29,
					userId: 2,
					questionId: 13,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 29,
					userId: 3,
					questionId: 13,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 29,
					userId: 4,
					questionId: 13,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 29,
					userId: 5,
					questionId: 13,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 29,
					userId: 6,
					questionId: 13,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 30,
					userId: 1,
					questionId: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 30,
					userId: 2,
					questionId: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 30,
					userId: 3,
					questionId: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 0,
					answerId: 30,
					userId: 4,
					questionId: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: -1,
					answerId: 30,
					userId: 5,
					questionId: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					dir: 1,
					answerId: 30,
					userId: 6,
					questionId: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Votes", null, {});
	},
};
