const express = require("express");
const { check, validationResult } = require("express-validator");
const { csrfProtection, asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");
const router = express.Router();
const db = require("../db/models");

// check permissions helper middleware
const checkPermissions = (question, currentUser) => {
	if (question.userId !== currentUser.id) {
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
		const questions = await db.Question.findAll();
		res.render("question-list", { title: "Questions", questions });
	})
);

// get add question page
router.get("/question/add", requireAuth, csrfProtection, (req, res) => {
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
];

// post a new question
router.post(
	"/question/add",
	requireAuth,
	csrfProtection,
	questionValidators,
	asyncHandler(async (req, res) => {
		const { title, body } = req.body;

		const question = db.Question.build({
			userId: res.session.user.id,
			title,
			body,
		});

		const validatorErrors = validationResult(req);

		if (validatorErrors.isEmpty()) {
			await question.save();
			res.redirect("/");
		} else {
			const errors = validatorErrors.array().map((error) => error.msg);
			res.render("question-add", {
				title: "Add Question",
				question,
				errors,
				csrfToken: req.csrfToken(),
			});
		}
	})
);

// get question edit page
router.get(
	"/question/edit/:id(\\d+)",
	requireAuth,
	csrfProtection,
	asyncHandler(async (req, res) => {
		const questionId = parseInt(req.params.id, 10);
		const question = await db.Question.findByPk(questionId);

		checkPermissions(question, res.session.user);

		res.render("question-edit", {
			title: "Edit Question",
			question,
			csrfToken: req.csrfToken(),
		});
	})
);

// post question edit
router.post(
	"/question/edit/:id(\\d+)",
	requireAuth,
	csrfProtection,
	questionValidators,
	asyncHandler(async (req, res) => {
		const questionId = parseInt(req.params.id, 10);
		const questionToUpdate = await db.Question.findByPk(questionId);

		checkPermissions(question, res.session.user);

		const { title, body } = req.body;

		const question = {
			title,
			body,
		};

		const validatorErrors = validationResult(req);

		if (validatorErrors.isEmpty()) {
			await questionToUpdate.update(question);
			res.redirect("/");
		} else {
			const errors = validatorErrors.array().map((error) => error.msg);
			res.render("question-edit", {
				title: "Edit Question",
				question: { ...question, questionId },
				errors,
				csrfToken: req.csrfToken(),
			});
		}
	})
);

// get delete question page
router.get(
	"/question/delete/:id(\\d+)",
	requireAuth,
	csrfProtection,
	asyncHandler(async (req, res) => {
		const questionId = parseInt(req.params.id, 10);
		const question = await db.Question.findByPk(questionId);

		checkPermissions(question, res.session.user);

		res.render("question-delete", {
			title: "Delete Question",
			question,
			csrfToken: req.csrfToken(),
		});
	})
);

// post question delete
router.post(
	"/question/delete/:id(\\d+)",
	requireAuth,
	csrfProtection,
	asyncHandler(async (req, res) => {
		const questionId = parseInt(req.params.id, 10);
		const question = await db.Question.findByPk(questionId);

		checkPermissions(question, res.session.user);

		await question.destroy();
		res.redirect("/");
	})
);


module.exports = router;
