const express = require("express");
const { get } = require(".");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const questions = await db.Question.findAll();
    res.render("questions-list", {questions});
}))

router.get("/:id(\\d+)", asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await db.Question.findByPk(questionId);
    res.render("question", {question})
}))

module.exports = router;
