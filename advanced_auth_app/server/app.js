const express = require("express");
const { APP_PORT } = require("./config");
const connectToDB = require("./db/connect");
const userRouter = require("./routes/user.routes");
const authRouter = require("./routes/auth.routes");


const app = express();

app.use(express.json());


app.listen(APP_PORT, async () => {
  console.log(`Running on PORT -> ${APP_PORT}`);
  try {
    await connectToDB();
  } catch (err) {
    console.log(err);
  }
});


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, resp, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return resp.status(statusCode).json({
    success: false,
    message,
    statusCode,
  })
});