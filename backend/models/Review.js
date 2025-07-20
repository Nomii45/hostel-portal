import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  hostel: { type: mongoose.Schema.Types.ObjectId, ref: "Hostel", required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export const Review = mongoose.model("Review", reviewSchema);
