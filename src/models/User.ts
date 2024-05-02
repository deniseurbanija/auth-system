import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
  _id: {type: Schema.Types.ObjectId},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contacts : [{type: Schema.Types.ObjectId, ref: "Contact"}]
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

// utils


const User = mongoose.model("User", userSchema);

export default User;
