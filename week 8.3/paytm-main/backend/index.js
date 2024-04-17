const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello home page");
});

app.get("/signin", (req, res) => {
    res.send("Hello signin page")
});

app.get("/signup", (req, res) => {
    res.send("Hello signup page");
});

app.get("/updateProfile", (req, res) => {
    res.send("Hello update profile page");
});


app.listen(port, () => {
    console.log(`Server is running on ${port}...`);
})