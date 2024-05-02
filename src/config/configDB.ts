import mongoose from "mongoose";
import "dotenv/config";

const { MONGO_URI, MONGO_TEST_URI, NODE_ENV } = process.env;

const connectionString = NODE_ENV == "test" ? MONGO_TEST_URI : MONGO_URI;

const configDB = async (): Promise<void> => {
  try {
    await mongoose.connect(connectionString as string, {});

    console.log("Successful DB connection");
  } catch (error) {
    console.error("Cannot connect to DB", error);
  }
};

export default configDB;
