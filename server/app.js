const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");
// const User = require("./model/userSchema")

app.use(express.json());

// app.use('/', require('./router/auth'));
const routes = require("./router/auth");

app.use(routes);


const PORT = process.env.PORT;

// const DB = `mongodb://127.0.0.1:27017/Portfolio`;
console.log("DB connected");

const middleware = (req, res, next) => {
    console.log(" this is middleware");
    next();
};
app.listen(PORT, () => {
  console.log(`server is runnng on ${PORT}`);
});
