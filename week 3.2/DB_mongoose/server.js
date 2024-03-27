const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";

const app = express();
app.use(express.json());
const port = 3000;

const url = "mongodb+srv://ronitkhajuria03:Rksharma%402003@cluster0.qx4xpmb.mongodb.net/user_DB";
mongoose.connect(url);

const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post('/signup', async (req, res) =>{
  const name = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const userExists = await User.findOne({email: email});
  if(userExists) {
    return res.status(400).send("Username already exists");
  }
  
  const user = new User({
    name: name,
    email: email,
    password: password
  });
  user.save();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});