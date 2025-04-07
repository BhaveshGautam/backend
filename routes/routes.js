import express from "express";

import { createCourse, getAllCoursesWithUsers, getSingleCourse ,getCourseAttendance} from "../controllers/courseController.js";
const router = express.Router();

router.get("/all", getAllCoursesWithUsers);
router.get("/:id", getSingleCourse); 
router.post("/", createCourse);
router.get("/:id/attendance", getCourseAttendance);
// router.put("/:id", updateCourse);
// router.delete("/:id", deleteCourse);