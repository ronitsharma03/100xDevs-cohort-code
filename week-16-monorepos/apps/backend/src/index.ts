import express from "express";

const app = express();

app.get("/",  (req, res) => {
    res.send("Hello get route!");
});

app.listen(3002, () => {
    console.log(`Server running on 3002..`);
});