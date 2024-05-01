const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = 3000;

app.use(bodyparser.json());
app.get('/', (req, res) => {
  res.send("Hey, Welcome to my server");
})
app.post('/', (req, res) => {
  // console.log(req.headers["authorization"])
  console.log(req.body.message);
  res.send({
    msg: "What you want?"
  })
})
app.listen(port, () =>{
  console.log(`Listening on port ${port}....`);
});