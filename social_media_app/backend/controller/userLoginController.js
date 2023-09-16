const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.loginUser = async(req, resp) => {
    const userData = req.body;
    // console.log(userData)
    try {
        const userInDb = await User.findOne({email: userData.email});
        if(userInDb) {
            const password = await bcrypt.compare(userData.password, userInDb.password);
            console.log(password);
            if(password) {
                return resp.status(201).send({user: userInDb});
            }
            return resp.status(400).send({error: 'User not found'});
        }
        return resp.status(400).send({error: 'User not found'});

    } catch(err) {
        return resp.send({error: err});
    }
}