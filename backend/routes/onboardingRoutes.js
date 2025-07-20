import express from "express";
import { onboardStudent, onboardHostelOwner } from "../controllers/onboardingController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/student", protect, onboardStudent);
router.post("/owner", protect, onboardHostelOwner);

export default router;
