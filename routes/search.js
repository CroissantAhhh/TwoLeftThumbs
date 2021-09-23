const express = require("express");
const Sequelize = require("sequelize");
const router = express.Router();

const db = require("../db/models");
const op = Sequelize.Op;

let questions = [];

let termSearch = async (term) => {
    let returnVals = await db.Question.findAll({
        where: {
            title: {
                [op.iLike]: `%${term}%`,
            },
        },
    });
    //
    questions.push(...returnVals.map(val => val.dataValues))
}

router.get("/", async (req, res) => {
    let { q } = req.query;
    q = q.split(" ")
    for (const term of q) {
        await termSearch(term);
    }
    console.log(questions);
	res.render("question-list", { questions });
});

module.exports = router;