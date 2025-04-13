import express from "express";
import { deleteCourse, getAllCoursesWithUsers, getSingleCourse, updateCourse }
    from "../controller/course";
import { createCourse, getCourseAttendance } from "../controller/admin";

const router = express.Router();

router.get("/all", getAllCoursesWithUsers);
router.post("/", createCourse);
router.get("/:id/attendance", getCourseAttendance);
router.get("/:id", getSingleCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;