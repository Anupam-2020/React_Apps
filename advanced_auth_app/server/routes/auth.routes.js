const express = require("express");
const { signup, signin } = require("../controllers/auth.controller");

const authRouter = express();

authRouter.post('/sign-up', signup);

authRouter.post('/sign-in', signin)

module.exports = authRouter;