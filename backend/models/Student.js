import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  city: String,
  institute: String,
  gender: { type: String, enum: ["male", "female", "other"] },
  budget: Number,
  preferences: [String] // e.g. ['wifi', 'mess', 'ac']
}, { timestamps: true });

export const Student = mongoose.model("Student", studentSchema);
