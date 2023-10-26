const {DATABASE_URL} = require("../config/index");
const mongoose = require("mongoose");


const connectToDB = async() => {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log(DATABASE_URL);
    }catch(e) {
        console.log(e);
    }
}

module.exports = connectToDB;