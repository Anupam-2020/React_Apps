const User = require("../models/User");

exports.signUpUser = async (req, resp) => {
  const userData = req.body;
  try {
    const existingUser = await User.findOne({ email: userData.email });

    if (existingUser) {
      return resp
        .status(400)
        .send({ message: "User already exist, Try with different email" });
    }

    const newUser = new User({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    });

    const register = await newUser.save();
    console.log(register);
    return resp.status(200).send({ message: "Registration successful" });
  } catch (err) {
    return resp.status(400).send({ error: err });
  }
};

exports.getAllUsers = async (req, resp) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return resp.status(400).send({ error: "No user found" });
    }

    return resp.status(200).json({ users });
  } catch (err) {
    return resp.status(400).send({ error: err });
  }
};
