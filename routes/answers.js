const express = require("express");
const { validationResult } = require("express-validator");

const db = require("../db/models");
const { csrfProtection, asyncHandler, answerValidators } = require("./utils");

const router = express.Router();

router.post(
  "/",
  csrfProtection,
  answerValidators,
  asyncHandler(async (req, res) => {
    const { body } = req.body;
    const { userId } = req.session.auth;

    const answer = await db.Answer.build({
      body,
      userId,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await answer.save();
      res.redirect("/questions/:id");
    } else {
      const errors = validatorErrors.array.map((error) => error.msg);
      res.render("index", {
        errors,
        answer,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.delete(
  "/:id",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const answer = await db.Answer.findByPk(id);
    await answer.destroy();
    res.redirect(`/questions/${answer.questionId}`);
  })
);

router.put(
  "/:id",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { body } = req.body;
    const answer = await db.Answer.findByPk(id);
    answer.body = body;
    await answer.save();
    res.redirect(`/questions/${answer.questionId}`);
  })
);

router.post(
  "/:id(\\d+)/votes",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const answerId = document.querySelector(".answer_upVote").dataset.id;
    const { dir } = req.body;

    const vote = db.Vote.build({
      dir,
      answerId,
      userId: req.session.auth.userId,
    });

    await vote.save();
    res.status(200).json();
  })
)

router.put(
  "/:id(\\d+)/votes/:voteId(\\d+)",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const answerId = document.querySelector(".answer_upVote").dataset.id;
    const voteToUpdate = await db.Vote.findOne({
        where: {
            answerId,
            userId: req.session.auth.userId,
        }
    })
    const { dir } = req.body;
    const vote = {
        dir
    }

    await voteToUpdate.update(vote);
    res.status(200).json();
  })
)

module.exports = router;
