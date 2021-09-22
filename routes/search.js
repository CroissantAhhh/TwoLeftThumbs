const express = require("express");
const Sequelize = require("sequelize");
const router = express.Router();

const db = require("../db/models");
const op = Sequelize.Op;

router.get("/", async (req, res) => {
    const { term } = req.query;
    console.log("search query....", req.query)
    const questions = await db.Question.findAll({
        where: {
            title: {
                [op.iLike]: `%${term}%`
            }
        }
    })
    res.render("question-list", {questions})
});

module.exports = router;
