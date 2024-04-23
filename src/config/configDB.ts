import mongoose from "mongoose";
import "dotenv/config";

const configDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {});
    console.log("Successful DB connection");
  } catch (error) {
    console.error("Cannot connect to DB", error);
  }
};

export default configDB;
