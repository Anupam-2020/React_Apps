const {DATABASE_URL} = require("../config/index");
const mongoose = require("mongoose");


const connectToDB = async() => {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log("Connected to DB");
    }catch(e) {
        console.log(e);
    }
}

module.exports = connectToDB;