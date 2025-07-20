import mongoose from "mongoose";

const hostelOwnerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  hostelName: String,
  address: String,
  contactNumber: String,
  description: String
}, { timestamps: true });

export const HostelOwner = mongoose.model("HostelOwner", hostelOwnerSchema);
