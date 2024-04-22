const express = require("express");
const jws = require("jsonwebtoken");
require("dotenv").config();
const validateToken = require("./middlewares/validateToken");

const secret = process.env.SECRET;
const app = express();

app.use(express.json());

const generateAccessToken = (user) => {
  return jws.sign(user, secret, { expiresIn: "10m" });
};

app.post("/token", (req, res) => {
  //get user from DB
  const username = req.body;
  const user = { username: username };
  const token = generateAccessToken(user);
  res
    .header("authorization", token)
    .json({ message: "Autenticado", token: token });
});

app.get("/public", (req, res) => {
  res.send("Public");
});

app.get("/private", validateToken, (req, res) => {
  try {
    res.send("Private");
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
