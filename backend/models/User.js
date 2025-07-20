import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["student", "owner", "admin"],
    required: true,
    default: "student"
  },
  onboarded: { type: Boolean, default: false },
  bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Hostel" }]
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
