const express = require("express");
const { signUpUser, getAllUsers } = require("../controller/userSignUpController");
const { loginUser } = require("../controller/userLoginController");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/signup", signUpUser);
router.post("/login", loginUser);

module.exports = router; 