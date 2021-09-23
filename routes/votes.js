const express = require("express");
const Sequelize = require("sequelize");
const { check, validationResult } = require("express-validator");
const { csrfProtection, asyncHandler } = require("./utils");
const { requireAuth } = require("../auth");
const router = express.Router();
const db = require("../db/models");
const op = Sequelize.Op;

router.post('/:id')


module.exports = router;
