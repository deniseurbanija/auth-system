const validateToken = (req, res, next) => {
  const token = req.header("authorization") || req.query.token;

  if (!token) res.status(403).send("Access denied");
  jws.verify(token, secret, (error, user) => {
    if (error) {
      res.status(401).send("Access denied: token expired or incorrect");
    } else {
      next();
    }
  });
};

module.exports = validateToken;
