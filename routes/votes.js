const express = require("express");
const { asyncHandler } = require("./utils");
const router = express.Router();
const db = require("../db/models");

router.post(
  "/:id",
  asyncHandler(async (req, res) => {
    const answerId = req.params.id;
    const { userId } = req.session.auth;
    const { dir } = req.body;
    const vote = await db.Vote.findOne({ where: { answerId, userId } });

    if (vote) {
      if (vote.dir === req.body.dir) {
        vote.dir = 0;
        await vote.save();
        res.status(200).json();
        return;
      }
      vote.dir = dir;
      await vote.save();
      res.status(200).json();
      return;
    }
    const newVote = db.Vote.build({ userId, answerId, dir });
    await newVote.save();
    res.status(201).json();
  })
);

router.post(
    "/question/:id",
    asyncHandler(async (req, res) => {
      const questionId = req.params.id;
      const { userId } = req.session.auth;
      const { dir } = req.body;
      const vote = await db.Vote.findOne({ where: { questionId, userId } });

      if (vote) {
        if (vote.dir === req.body.dir) {
          vote.dir = 0;
          await vote.save();
          res.status(200).json();
          return;
        }
        vote.dir = dir;
        await vote.save();
        res.status(200).json();
        return;
      }
      const newVote = db.Vote.build({ userId, questionId, dir });
      await newVote.save();
      res.status(201).json();
    })
  );

module.exports = router;
