import { Router } from "express";
import { enrollInCourse, listMyCourses } from "../controllers/enrollmentController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = Router();
router.use(requireAuth);
router.get("/", listMyCourses);
router.post("/:id", enrollInCourse);

export default router;
