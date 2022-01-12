const jwt = require('jsonwebtoken');
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  // res.send(`hello world`);
});

router.post("/register", async (req, res) => {
  const { fname, lname, email, phone, password, cpassword } = req.body;
  // console.log(req.body);
  if (!fname || !lname || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "please fill all fields" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password doesn't match" });
    } else {
      const user = new User({ fname, lname, email, phone, password, cpassword });
    
      // console.log(userExist);
      const userRegistered = await user.save();
    

      // console.log(`${User} userregistered successfully`);
      // console.log(userRegistered);

      res.status(201).json({ message: "user registered successfully" });
  
    }
  }
   catch (err) {
    // console.log(err);
  }
});

// res.json({ message : req.body });

router.post('/signin', async (req, res) => {
    
  try {
    let token;
    const { email, password } = req.body;
        
    if (!email || !password) {
      return res.status(400).json({ error: "Filled all data" })
    }

    const userLogin = await User.findOne({ email: email });
        
    // console.log(userLogin);

    if (userLogin) {
        const isMatch = await bcrypt.compare(password, userLogin.password);
        
      const token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly:true
      });
              
      if (!isMatch) {
        res.status(400).json({ error: "not signin successfully" });
      } else {
        res.json({ message: "signin successfully" });
      }
    
  } else {
    res.status(400).json({ error: "not signin successfully" });
  }
      
}catch (err) {
        // console.log(err);
    }
})

module.exports = router;
