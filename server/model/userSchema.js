const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// var UserModel = mongoose.model('User', User);
// var User = new UserModel(req.body);

userSchema.pre("save", async function (next) {
  // console.log("444")
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let generatetoken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: generatetoken });
    console.log("token");
    await this.save();
    // console.log(token);
    console.log(generatetoken);
    return generatetoken;
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
