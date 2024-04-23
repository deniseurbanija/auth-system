const mongoose = require("mongoose");
require("dotenv").config();

async function configDB() {
  await mongoose.connect(process.env.MONGO_URI);
}

module.exports = configDB;
