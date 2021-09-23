const express = require("express");
const Sequelize = require("sequelize");
const router = express.Router();

const db = require("../db/models");
const op = Sequelize.Op;

router.get("/", async (req, res) => {
	const { q } = req.query;
	console.log(typeof q);
	const questions = await db.Question.findAll({
		where: {
			title: {
				[op.iLike]: `%${q}%`,
			},
		},
	});
	res.render("question-list", { questions });
});

module.exports = router;
