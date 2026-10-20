import { Router } from "express";
import { getCurrentUser, login, signup } from "../controllers/auth.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();
router.post("/signup", signup);
router.post("/login", login);
router.get("/me", requireAuth, getCurrentUser);

export default router;
