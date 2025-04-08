import express from "express";
import {  getAllCoursesWithUsers,getSingleCourse} 
from "../controller/course";
import { createCourse, getCourseAttendance } from "../controller/admin";

const router = express.Router();

router.get("/all", getAllCoursesWithUsers);
router.post("/", createCourse);
router.get("/:id/attendance", getCourseAttendance);
router.get("/:id", getSingleCourse);

export default router;

// router.put("/:id", updateCourse);
// router.delete("/:id", deleteCourse);