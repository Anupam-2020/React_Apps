import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const APP_PORT = process.env.APP_PORT;

app.use('/',(req, resp, next) => {
    console.log("Hello World");
    resp.end();
})

app.listen(APP_PORT, () => console.log(`Running on PORT -> ${APP_PORT}`));