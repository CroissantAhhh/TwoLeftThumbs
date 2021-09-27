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
	});

	returnVals.map((val) => {
		let q = val.dataValues;
		if (!questionSet.has(q.id)) {
			questionSet.add(q.id);
			questions.push(q);
		}
	});
};

router.get("/", async (req, res) => {
	let { q } = req.query;
	q = q.split(" ");
	for (const term of q) {
		await termSearch(term);
	}

	res.render("result", { questions });
	questions = [];
	questionSet.clear();
});

module.exports = router;
