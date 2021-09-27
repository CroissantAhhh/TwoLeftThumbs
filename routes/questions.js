const express = require("express");
const Sequelize = require("sequelize");
const { check, validationResult } = require("express-validator");
const { csrfProtection, asyncHandler } = require("./utils");
const { requireAuth } = require("../auth");
const router = express.Router();
const db = require("../db/models");
const { sequelize } = require("../db/models");
const op = Sequelize.Op;

// check permissions helper middleware
const checkPermissions = (question, currentUserId) => {
	if (question.userId !== currentUserId) {
		const err = new Error("Illegal operation.");
		err.status = 403; // Forbidden
		throw err;
	}
};

// get question list/ page
router.get(
	"/",
	requireAuth,
	asyncHandler(async (req, res) => {
		const topQuestions = await db.Question.findAll({ include: ["answers"] });
		topQuestions.sort((a, b) => b.answers.length - a.answers.length);
		let top10Questions = [];
		for (let i = 0; i < 10; i++) {
			top10Questions = [...top10Questions, topQuestions[i]];
		}

		const questions = await db.Question.findAll({
			include: ["answers", "votes"],
		});
		questions.forEach((question) => {
			let voteSum = 0;
			for (let vote of question.votes) {
				voteSum += vote.dir;
			}
			question.votes = voteSum;
			question.answers = question.answers.length;
		});
		questions.sort((a, b) => b.votes - a.votes);
		res.render("question-list", { title: "Questions", questions, top10Questions });
	})
);

// get add question page
router.get("/add", requireAuth, csrfProtection, (req, res) => {
	const question = db.Question.build();
	res.render("question-add", {
		title: "Add Question",
		question,
		csrfToken: req.csrfToken(),
	});
});

// checks the title input
const questionValidators = [
	check("title")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a value for Title")
		.isLength({ max: 255 })
		.withMessage("Title must not be more than 255 characters long"),
	check("body")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a value for Body"),
];

// post a new question
router.post(
	"/",
	requireAuth,
	csrfProtection,
	questionValidators,
	asyncHandler(async (req, res) => {
		const { title, body } = req.body;

		const question = db.Question.build({
			userId: req.session.auth.userId,
			title,
			body,
		});

		const validatorErrors = validationResult(req);

		if (validatorErrors.isEmpty()) {
			await question.save();

			const vote = db.Vote.build({
				dir: 1,
				userId: req.session.auth.userId,
				questionId: question.id,
			});
			await vote.save();
			res.status(201).json();
		} else {
			const errors = validatorErrors.array().map((error) => error.msg);
			res.status(401).json("question-add", {
				title,
				body,
				errors,
				csrfToken: req.csrfToken(),
			});
		}
	})
);

// get specific question info
router.get(
	"/:id",
	csrfProtection,
	asyncHandler(async (req, res) => {
		let questionVoteCount = 0;
		let answerVoteCount = [];
		let voted = { question: 0 };
		const { userId } = req.session.auth;
		const questionId = parseInt(req.params.id, 10);
		const topQuestions = await db.Question.findAll({ include: ["answers"] });
		const question = await db.Question.findByPk(questionId, {
			include: ["answers", "votes"],
		});
		const answers = await db.Answer.findAll({
			where: { questionId },
			include: ["votes"],
		});

		question.votes.forEach((vote) => {
			if (vote.userId === userId) {
				voted.question = vote.dir;
			}
		});

		answers.forEach((answer) => {
			let voteCount = [0, 0];
			answer.votes.forEach((vote) => {
				voteCount[0] += vote.dir;
				if (userId === vote.userId) {
					voteCount[1] = vote.dir;
				}
			});
			answerVoteCount.push([answer, voteCount]);
		});
		answerVoteCount.sort((a, b) => b[1] - a[1]);
		topQuestions.sort((a, b) => b.answers.length - a.answers.length);
		let top10Questions = [];
		for (let i = 0; i < 10; i++) {
			top10Questions = [...top10Questions, topQuestions[i]];
		}
		question.votes.forEach((vote) => {
			questionVoteCount += vote.dir;
		});
		res.render("question", {
			question,
			voted,
			questionVoteCount,
			answerVoteCount,
			top10Questions,
			csrfToken: req.csrfToken(),
		});
	})
);

// get question edit page
router.get(
	"/:id(\\d+)/edit",
	requireAuth,
	csrfProtection,
	asyncHandler(async (req, res) => {
		const questionId = parseInt(req.params.id, 10);
		const question = await db.Question.findByPk(questionId);

		checkPermissions(question, req.session.auth.userId);

		res.render("question-edit", {
			title: "Edit Question",
			question,
			csrfToken: req.csrfToken(),
		});
	})
);

// post question edit
router.put(
	"/:id(\\d+)",
	requireAuth,
	csrfProtection,
	questionValidators,
	asyncHandler(async (req, res) => {
		const questionId = parseInt(req.params.id, 10);
		const questionToUpdate = await db.Question.findByPk(questionId);

		checkPermissions(questionToUpdate, req.session.auth.userId);

		const { title, body } = req.body;

		const question = {
			title,
			body,
		};

		const validatorErrors = validationResult(req);

		if (validatorErrors.isEmpty()) {
			await questionToUpdate.update(question);
			res.status(200).json();
		} else {
			const errors = validatorErrors.array().map((error) => error.msg);
			res.status(401).json({
				title,
				body,
				errors,
				csrfToken: req.csrfToken(),
			});
		}
	})
);

// get delete question page
router.get(
	"/:id(\\d+)/delete",
	requireAuth,
	csrfProtection,
	asyncHandler(async (req, res) => {
		const questionId = parseInt(req.params.id, 10);
		const question = await db.Question.findByPk(questionId);

		checkPermissions(question, req.session.auth.userId);

		res.render("question-delete", {
			title: "Delete Question",
			question,
			csrfToken: req.csrfToken(),
		});
	})
);

// post question delete
router.delete(
	"/:id/",
	csrfProtection,
	requireAuth,
	asyncHandler(async (req, res) => {
		const questionId = parseInt(req.params.id, 10);
		const answers = await db.Answer.findAll({ where: { questionId } });
		console.log(answers);
		answers.forEach(async (answer) => {
			let answerId = answer.id;
			await db.Vote.destroy({ where: { answerId } });
		});
		await db.Vote.destroy({ where: { questionId } });
		await db.Answer.destroy({ where: { questionId } });
		const question = await db.Question.findByPk(questionId);
		await question.destroy();
		res.status(200).json();
	})
);

module.exports = router;
