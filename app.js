const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const { sequelize } = require("./db/models");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const questionsRouter = require("./routes/questions");
const answersRouter = require("./routes/answers");
const votesRouter = require("./routes/votes");
const searchRouter = require("./routes/search");
const aboutRouter = require("./routes/about");
const teamRouter = require("./routes/team");
const { environment, sessionSecret } = require("./config");
const { restoreUser } = require("./auth");

const app = express();

app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, "public")));

const store = new SequelizeStore({ db: sequelize });
app.use(
	session({
		secret: sessionSecret,
		store,
		saveUninitialized: false,
		resave: true,
	})
);
store.sync();
app.use(restoreUser);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/questions", questionsRouter);
app.use("/answers", answersRouter);
app.use("/votes", votesRouter);
app.use("/search", searchRouter);
app.use("/about", aboutRouter);
app.use("/team", teamRouter);

app.use(function (req, res, next) {
	next(createError(404));
});

app.use(function (err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
