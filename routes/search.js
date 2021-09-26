const express = require("express");
const Sequelize = require("sequelize");
const router = express.Router();

const db = require("../db/models");
const op = Sequelize.Op;

let questions = [];
const questionSet = new Set();

let termSearch = async (term) => {
	let returnVals = await db.Question.findAll({
		where: {
			title: {
				[op.iLike]: `%${term}%`,
			},
		},
		include: ["answers", "votes"],
	});

	const questionArr = returnVals.map((val) => {
		let q = val.dataValues;
		if (!questionSet.has(q.id)) {
			questionSet.add(q.id);
			questions.push(q);
		}
	});

	questions.forEach((question) => {
		let voteSum = 0;
		for (let vote of question.votes) {
			voteSum += vote.dir;
		}
		question.votes = voteSum;
		question.answers = question.answers.length;
	});
	questions.sort((a, b) => b.votes - a.votes);
};

router.get("/", async (req, res) => {
	let { q } = req.query;
	q = q.split(" ");
	for (const term of q) {
		await termSearch(term);
	}

	res.render("question-list", { questions });
	questions = [];
	questionSet.clear();
});

module.exports = router;
