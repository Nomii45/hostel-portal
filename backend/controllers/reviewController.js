import { Review } from "../models/Review.js";
import { Message } from "../models/Message.js";

export const createReview = async (req, res) => {
  const { hostelId } = req.params;
  const { rating, comment } = req.body;

  // Check if student has messaged hostel owner
  const hasContacted = await Message.exists({ sender: req.user._id });

  if (!hasContacted) {
    return res.status(403).json({ message: "You must contact the hostel before reviewing." });
  }

  try {
    const review = await Review.create({
      hostel: hostelId,
      student: req.user._id,
      rating,
      comment
    });

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ hostel: req.params.hostelId })
      .populate("student", "name");

    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
