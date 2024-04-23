import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// userSchema.pre("save", async function () {
//   const user = this;
//   if (user.isModified("password")) {
//     user.password = bcrypt.hash(this.password, 10)
//   }
//   next()
// });

const User = mongoose.model("User", userSchema);

export default User;
