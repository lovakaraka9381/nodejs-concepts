import express from "express";
const app = express.Router();

app.get("/", (req, res) => {
  res.status(200).send("welcome to express!");
});

export default app;
