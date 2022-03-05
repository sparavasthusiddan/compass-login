const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();


router.post("/register", async (req, res) => {
  const { user_name, user_email, user_password } = req.body;

  const alreadyExistsUser = await User.findOne({ where: { user_email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (alreadyExistsUser) {
    return res.status(409).json({ message: "User with email already exists!" });
  }

  const newUser = new User({ user_name, user_email, user_password });
  console.log("newUser",newUser);
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot register user at the moment!" });
  });

  if (savedUser) res.json({ message: "Thanks for registering" });
});


router.post("/login", async (req, res) => {

  /* start of temporary testing. remove it later. */
  // const userWithEmail = {
  //   user_name: 'Jack',
  //   user_email: 'jack@email.com',
  //   user_password: 'Jack123'
  // }
  /* end of temporary testing */
   const { user_email, user_password } = req.body;
  const userWithEmail = await User.findOne({ where: { user_email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );
console.log("userWithEmail",userWithEmail);
  if (!userWithEmail)
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });

  if (userWithEmail.user_password !== user_password)
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });

  const jwtToken = jwt.sign(
    { id: userWithEmail.id, user_email: userWithEmail.user_email },
    'secret'
  );

  res.json({ message: "Welcome Back!", token: jwtToken });
});


module.exports = router;
