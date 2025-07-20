import { User } from "../models/User.js";
import { Hostel } from "../models/Hostel.js";
import { Review } from "../models/Review.js";

export const getDashboardStats = async (req, res) => {
  try {
    const usersCount = await User.countDocuments();
    const hostelsCount = await Hostel.countDocuments();
    const reviewsCount = await Review.countDocuments();

    res.status(200).json({ usersCount, hostelsCount, reviewsCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
