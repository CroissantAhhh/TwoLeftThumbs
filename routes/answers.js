const express = require("express");
const { validationResult } = require("express-validator");

const db = require("../db/models");
const { csrfProtection, asyncHandler, answerValidators } = require("./utils");
const { requireAuth } = require("../auth");

const router = express.Router();

router.post(
  "/",
  csrfProtection,
  // answerValidators,
  asyncHandler(async (req, res) => {
    const { body, questionId } = req.body;
    const { userId } = req.session.auth;
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
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const answerId = id;
    await db.Vote.destroy({ where: { answerId } });
    const answer = await db.Answer.findByPk(id);
    const questionId = answer.questionId;
    answer.destroy();
    res.status(200).json();
  })
);

router.put(
  "/:id",
  csrfProtection,
  requireAuth,
  answerValidators,
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const {body} = req.body;
    const answer = await db.Answer.findByPk(id);

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      answer.body = body;
      await answer.save();
      res.status(200).json();
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
      res.status(401).json({
        body,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.get(
  "/:id/edit",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const answer = await db.Answer.findByPk(id);
    res.render("answer-edit", { answer, csrfToken: req.csrfToken() });
  })
);

module.exports = router;
