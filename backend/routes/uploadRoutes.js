import express from "express";
import { upload } from "../utils/cloudinary.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST /api/upload - multiple images
router.post("/", protect, upload.array("images", 5), (req, res) => {
  const urls = req.files.map(file => file.path);
  res.status(200).json({ urls });
});

export default router;
