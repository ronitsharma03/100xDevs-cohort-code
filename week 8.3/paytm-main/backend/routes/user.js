const express = require("express");

const router = express.Router();

router.get("/signin", (req, res) => {
    res.send("Hello from signin");
})

module.exports = router;