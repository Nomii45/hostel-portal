import express from "express";
import { createReview, getReviews } from "../controllers/reviewController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/:hostelId", protect, createReview);
router.get("/:hostelId", getReviews);

export default router;
