const User = require("../db/model");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error");
const jwt = require('jsonwebtoken');
const {JWT_TOKEN} = require('../config');


const signup = async(req, resp, next) => {

    const {userName, email, password} = req.body;

    try {
        const checkExistingUser = await User.findOne({userName});
        if(checkExistingUser) {
            return resp.status(500).json({message: "User already exists"});
        }
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({
            userName,
            email,
            password: hashedPassword
        });
        await newUser.save();
        return resp.status(201).json({message: "User created successfully"});
    } catch(err) {
        next(err);
    }
}


const signin = async(req, resp, next) => {
    const {email, password} = req.body;
    try {
        const checkEmail = await User.findOne({email});
        if(!checkEmail) return next(errorHandler(404, 'Invalid credentials'));
        const checkPassword = await bcryptjs.compareSync(password, checkEmail.password);
        if(!checkPassword) return next(errorHandler(401, 'Wrong Credentials'));
        const token = jwt.sign({id: checkEmail._id}, JWT_TOKEN);
        const {password: hashedPassword, ...rest} = checkEmail._doc; // we need to return only checkmail._doc...
        resp.cookie('access_token', token, {httpOnly: true})
        .status(200)
        .json(rest);
    } catch(err) {
        next(err);
    }
}

module.exports = {signup, signin};