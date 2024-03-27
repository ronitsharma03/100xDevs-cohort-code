const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "Ronitkhajuria03@gmail.com",
        password: "12345"
    },
    {
        username: "Raman@gmail.com",
        password: "123456"
    },
    {
        username: "Aryan@gmail.com",
        password: "8764874"
    },
    {
        username: "Ram@gmail.com",
        password: "8774987"
    }
];

function userExists(username, password){
    let userExists = false;
    ALL_USERS.find((user) => {
        if(user.username == username && user.password == password){
            userExists = true;
        }
    });
    return userExists;
}

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User don't exists in memory Database"
        });
    }

    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get('/users', (req, res) => {
    const userToken = req.headers.authorization;
    try {
        const decoded = jwt.verify(userToken, jwtPassword);
        const username = decoded.username;

        const users = ALL_USERS.filter((user) => user.username !== username);
        res.json({
            users: users
        })
    } catch (error) {
        return res.status(403).json({
            msg: "Invalid Token"
        });
    }
});

app.listen(3000, (req, res) => {
    console.log("Server is running at 3000...");
});