const validateToken = require("../middlewares/validateToken");
const jws = require("jsonwebtoken");

const secret = process.env.SECRET;

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
    res.send("This is private");
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
});
