const express = require("express");
const {getAllCoursesWithUsers,getSingleCourse,updateCourse,deleteCourse} = require("../controller/course");

const router = express.Router();

router.get("/", getAllCoursesWithUsers);
router.get("/:id", getSingleCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

module.exports = router;
