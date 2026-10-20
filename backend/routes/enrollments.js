import { Router } from "express";
import { enrollInCourse, listMyCourses } from "../controllers/enrollments.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();
router.use(requireAuth);
router.get("/", listMyCourses);
router.post("/:id", enrollInCourse);

export default router;
