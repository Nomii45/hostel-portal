import mongoose from "mongoose";

const hostelSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: String,
  price: Number,
  facilities: [String], // ["wifi", "laundry", "ac"]
  location: String,
  mapEmbedUrl: String, // For Google Maps
  images: [String], // Array of image URLs
  createdAt: { type: Date, default: Date.now },
  verified: { type: Boolean, default: false } // For admin badge
});

export const Hostel = mongoose.model("Hostel", hostelSchema);
