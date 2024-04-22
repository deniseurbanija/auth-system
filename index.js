const express = require("express");
const jws = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.SECRET;
const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.post("/token", (req, res) => {
  const token = null;
  res.send(token);
});

app.get("/public", (req, res) => {
  res.send("Public");
});

app.get("/private", (req, res) => {
  try {
    res.send("Private");
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
