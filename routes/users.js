const express = require("express");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const { loginUser, logoutUser } = require("../auth");

const db = require("../db/models");
const {
  csrfProtection,
  asyncHandler,
  userValidators,
  loginValidators,
} = require("./utils");

const router = express.Router();


router.get("/register", csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render("user-register", {
    title: "Register",
    user,
    csrfToken: req.csrfToken(),
  });
});

router.post(
  "/",
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res) => {
    const { email, userName, password } = req.body;

    const user = await db.User.build({
      email,
      userName,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      res.redirect("/");
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("user-register", {
        title: "Register",
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.get("/login", csrfProtection, (req, res) => {
  res.render("user-login", {
    title: "Login",
    csrfToken: req.csrfToken(),
  });
});

router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({ where: { email } });
      console.log(req, req.session);

      if (user !== null) {
        const passwordMatch = await bcrypt.compare(
          password,
          user.hashedPassword.toString()
        );

        if (passwordMatch) {
          loginUser(req, res, user);
          return res.redirect("/");
        }
      }

      errors.push("Login failed for the provided email address and password");
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render("user-login", {
      title: "Login",
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  })
);

router.post("/logout", (req, res) => {
  logoutUser(req, res);
  res.redirect("/users/login");
});

module.exports = router;
