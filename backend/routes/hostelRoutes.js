import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createHostel,
  getAllHostels,
  getSingleHostel,
  deleteHostel,
  updateHostel,
  verifyHostel
} from "../controllers/hostelController.js";

const router = express.Router();

router.post("/", protect, createHostel);
router.get("/", getAllHostels);
router.get("/:id", getSingleHostel);
router.put("/:id", protect, updateHostel);
router.delete("/:id", protect, deleteHostel);
router.patch("/verify/:id", protect, verifyHostel); // (optionally add admin middleware)


export default router;
