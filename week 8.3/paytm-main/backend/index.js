const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mainRouter = require("./router/index");

// All the requests that got to api/v1 will go to mainRouter that is in router/index.js
app.use("/api/v1", mainRouter);





app.listen(port, () => {
    console.log(`Server is running on ${port}...`);
})