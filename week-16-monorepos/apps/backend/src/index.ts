import express from "express";
import { VALUE } from "@repo/common/config";

const app = express();

app.get("/", (req, res) => {
  console.log(VALUE);
  res.send(VALUE);
});

app.listen(3002, () => {
  console.log(`Server running on 3002..`);
});
