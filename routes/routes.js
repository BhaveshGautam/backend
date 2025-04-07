import express from "express";
import { createCourse, getAllCoursesWithUsers,getSingleCourse, getCourseAttendance} 
from "../controllers/courseController.js";

const router = express.Router();

router.get("/all", getAllCoursesWithUsers);
router.post("/", createCourse);
router.get("/:id/attendance", getCourseAttendance);
router.get("/:id", getSingleCourse);

export default router;

// router.put("/:id", updateCourse);
// router.delete("/:id", deleteCourse);