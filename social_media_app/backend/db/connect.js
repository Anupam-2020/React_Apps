const mongoose = require('mongoose');

const startDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/social_media')
        console.log('Connected to db');
    } catch(err) {
        console.log(err);
    }
}

module.exports = startDB;