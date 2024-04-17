const express = require("express");
const zod = require("zod");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../db");
const { JWT_SECRET } = require("../config");
const bcrypt = require("bcrypt");
const saltRounds = 10;



// Signup route for user
const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
    firstName: zod.string().min(3),
    lastName: zod.string().min(3)
});

router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "E-mail already taken / Incorrect inputs"
        });
    }

    const existingUser = await User.findOne({
        username: req.body.username
    });
    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken!"
        })
    }
    
    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.password,
        lastName: req.body.lastName
    });

    const userId = newUser._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    return res.status(200).json({
        message: "User created successfully!",
        token: token
    });
})



// Signin route for the user
const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
});

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Wrong inputs"
        });
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if(!user){
        return res.status(411).json({
            message: "Error while logging in"
        });
    }

    const token = jwt.sign({
        userId: user._id
    }, JWT_SECRET);

    res.status(200).json({
        message: "Signin successfull",
        token: token
    });
})

module.exports = router;