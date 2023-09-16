const express = require('express');
const startDB = require('./db/connect');
const userRouter = require('./routes/user-routes');
const blogRouter = require('./routes/blog-routes');
const bodyParser = require('body-parser');

const app = express();

const PORT = 5000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/api", userRouter);
app.use("/api",blogRouter);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
    startDB();
});