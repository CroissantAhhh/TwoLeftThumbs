const express = require("express");
const { validationResult } = require("express-validator");

const db = require("../db/models");
const { csrfProtection, asyncHandler, answerValidators } = require("./utils");
const { requireAuth } = require("../auth");

const router = express.Router();

router.post(
  "/",
  csrfProtection,
  answerValidators,
  asyncHandler(async (req, res) => {
    const { body, questionId } = req.body;
    const { userId } = req.session.auth;

    console.log(req.body)

    const answer = await db.Answer.build({
      body,
      userId,
      questionId,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await answer.save();
      const vote = db.Vote.build({
        dir: 1,
        answerId: answer.id,
        userId: req.session.auth.userId,
      });
      await vote.save();
      res.redirect(`/questions/${questionId}`);
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

module.exports = router;
