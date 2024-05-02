import { kMaxLength } from "buffer";
import mongoose, { Schema } from "mongoose";

const contactSchema = new mongoose.Schema({
  _id: { type: Schema.Types.ObjectId },
  name: { type: String, require: true },
  lastname: { type: String, require: true },
  phoneNumber: {
    type: String,
    require: true,
    unique: true,
    minLength: 8,
    maxLength: 15,
  },
  favorite: { type: Boolean, default: false },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
