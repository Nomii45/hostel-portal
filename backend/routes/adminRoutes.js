import express from "express";
import { getAllUsers, deleteUser, getDashboardStats } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.use(protect, isAdmin); // apply to all below

router.get("/stats", getDashboardStats);
router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);

export default router;
