const dotenv = require('dotenv');
dotenv.config();

const APP_PORT = process.env.APP_PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const JWT_TOKEN = process.env.JWT_TOKEN

module.exports = {
    APP_PORT,
    DATABASE_URL,
    JWT_TOKEN
}