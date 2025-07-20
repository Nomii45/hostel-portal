import { Hostel } from "../models/Hostel.js";

export const createHostel = async (req, res) => {
    console.log("Received hostel creation request");
  try {
    const { title, description, price, facilities, location, mapEmbedUrl, images } = req.body;

    const hostel = await Hostel.create({
      owner: req.user._id,
      title,
      description,
      price,
      facilities,
      location,
      mapEmbedUrl,
      images
    });

    res.status(201).json(hostel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllHostels = async (req, res) => {
  try {
    const hostels = await Hostel.find().populate("owner", "name");
    res.status(200).json(hostels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getSingleHostel = async (req, res) => {
  try {
    const hostel = await Hostel.findById(req.params.id).populate("owner", "name");
    if (!hostel) return res.status(404).json({ message: "Hostel not found" });
    res.status(200).json(hostel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateHostel = async (req, res) => {
  try {
    const hostel = await Hostel.findById(req.params.id);
    if (!hostel) return res.status(404).json({ message: "Hostel not found" });

    // Allow only owner to update
    if (hostel.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const updated = await Hostel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteHostel = async (req, res) => {
  try {
    const hostel = await Hostel.findById(req.params.id);
    if (!hostel) return res.status(404).json({ message: "Hostel not found" });

    // Only owner can delete
    if (hostel.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await hostel.deleteOne();
    res.status(200).json({ message: "Hostel deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const verifyHostel = async (req, res) => {
  const hostel = await Hostel.findById(req.params.id);
  if (!hostel) return res.status(404).json({ message: "Not found" });

  hostel.verified = true;
  await hostel.save();

  res.status(200).json({ message: "Hostel verified" });
};
