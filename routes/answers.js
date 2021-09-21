const express = require("express");
const { validationResult } = require("express-validator");

const db = require("../db/models");
const {
  csrfProtection,
  asyncHandler,
  userValidators,
  loginValidators,
} = require("./utils");

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

module.exports = router;
