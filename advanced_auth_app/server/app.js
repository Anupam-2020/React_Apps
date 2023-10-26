const express = require('express');
const {APP_PORT} = require('./config');
const connectToDB = require("./db/connect");
const app = express();

app.use('/',(req, resp, next) => {
    console.log("Hello World");
    resp.end();
})

app.listen(APP_PORT, () => {
    console.log(`Running on PORT -> ${APP_PORT}`)
    connectToDB();
});