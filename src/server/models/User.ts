import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 50 },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  phoneNumber: { type: String, required: false, unique: true, sparse: true }, // allow login with either
  password: { type: String, required: true }, // hashed
  avatar: { type: String }, // URL to avatar
  preferences: {
    currency: { type: String, default: "USD" },
    notifications: {
      email: { type: Boolean, default: true },
      push: { type: Boolean, default: true },
    },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = model("User", UserSchema);

export default User;
