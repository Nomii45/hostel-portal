import express from "express";
import { toggleBookmark, getBookmarkedHostels } from "../controllers/bookmarkController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/:id", protect, toggleBookmark); // toggle add/remove
router.get("/", protect, getBookmarkedHostels); // get all saved

export default router;
