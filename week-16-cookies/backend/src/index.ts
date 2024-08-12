import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import cookieParser from "cookie-parser";
const cors = require("cors");
import path from "path";


const app = express();

const JWT_SECRET = "Hello jenfkjwkjef";

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));
app.use(cookieParser());


app.post("/signin", (req, res) => {
    const { email, password } = req.body;


    const token = jwt.sign({id: 1}, JWT_SECRET);
    res.cookie("token", token);
    res.json({
        message: 'Signin successful'
    })
});

app.get("/user", (req, res) => {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    res.json({
        UserId: decoded.id
    });
});


app.post("/logout", (req, res) => {
    res.cookie("token", "/");
    res.json({
        message: "Logged out!"
    })
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"));
})

app.listen(3000, () => {
    console.log("Server is running on 3000...")
})
