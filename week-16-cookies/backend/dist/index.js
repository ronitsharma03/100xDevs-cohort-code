"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors = require("cors");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const JWT_SECRET = "Hello jenfkjwkjef";
app.use(express_1.default.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));
app.use((0, cookie_parser_1.default)());
app.post("/signin", (req, res) => {
    const { email, password } = req.body;
    const token = jsonwebtoken_1.default.sign({ id: 1 }, JWT_SECRET);
    res.cookie("token", token);
    res.json({
        message: 'Signin successful'
    });
});
app.get("/user", (req, res) => {
    const token = req.cookies.token;
    const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    res.json({
        UserId: decoded.id
    });
});
app.post("/logout", (req, res) => {
    res.cookie("token", "/");
    res.json({
        message: "Logged out!"
    });
});
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../src/index.html"));
});
app.listen(3000, () => {
    console.log("Server is running on 3000...");
});
