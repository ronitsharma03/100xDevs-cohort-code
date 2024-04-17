const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello home page");
});

router.get("/signin", (req, res) => {
    res.send("Hello signin page")
});

router.get("/signup", (req, res) => {
    res.send("Hello signup page");
});

router.get("/updateProfile", (req, res) => {
    res.send("Hello update profile page");
});


module.exports = router;
