const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

dotenv.config({ path: "./config.env" });
require("./db/conn");
// const User = require("./model/userSchema")

app.use(express.json());
app.use(cors());

// app.use('/', require('./router/auth'));
const routes = require("./router/auth");

app.use(routes);

const PORT = process.env.PORT;

// const DB = `mongodb://127.0.0.1:27017/Portfolio`;
console.log("DB connected");

// const middleware = (req, res, next) => {
//   console.log(" this is middleware");
//   next();
// };

// app.get('Posts', (req, res) => {
//   console.log("Hello, this is my posts");
//   res.send("Hello! post page")
// })

app.listen(PORT, () => {
  console.log(`server is runnng on ${PORT}`);
});
