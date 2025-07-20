import { User } from "../models/User.js";

export const toggleBookmark = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const hostelId = req.params.id;

    const alreadyBookmarked = user.bookmarks.includes(hostelId);

    if (alreadyBookmarked) {
      user.bookmarks.pull(hostelId);
    } else {
      user.bookmarks.push(hostelId);
    }

    await user.save();
    res.status(200).json({
      message: alreadyBookmarked ? "Bookmark removed" : "Bookmark added",
      bookmarks: user.bookmarks
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getBookmarkedHostels = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("bookmarks");
    res.status(200).json(user.bookmarks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
