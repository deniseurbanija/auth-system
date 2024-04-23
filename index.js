const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const configDB = require("./config/configDB");
const { router } = require("./routes/index");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(router);

configDB()
  .then((res) => {
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((error) => console.log("error en el servidor", error.message));
