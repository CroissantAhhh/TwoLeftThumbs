const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("team");
});

module.exports = router;
