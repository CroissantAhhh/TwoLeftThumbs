const express = require("express");
const { get } = require(".");
const db = require("../db/models");
const { validationResult } = require("express-validator");
const { csrfProtection, asyncHandler, questionValidators } = require("./utils");

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const questions = await db.Question.findAll();
    res.render("questions-list", {questions});
}));

router.get("/:id(\\d+)", asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await db.Question.findByPk(questionId);
    res.render("question", {question});
}));

router.get('/add', csrfProtection, asyncHandler(async (req, res) => {
    const question = db.Question.build();
    res.render("question-add", {
        question,
        csrfToken: req.csrfToken()
    });
}));

router.post('/', csrfProtection, questionValidators,
  asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;

    const {
        title,
        body,
    } = req.body;

    const question = db.Question.build({
        title,
        body,
        userId
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await question.save();
      res.redirect(`/questions/${question.id}`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('question-add', {
        question,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));

module.exports = router;
