// create function for getting all the courses and single courses
import Course from "../models/Course.js";
export const getAllCoursesWithUsers = async (req, res) => {
  try {
    const courses = await Course.find().populate("Users", "email"); // you can choose fields
    res.status(200).json({ Course });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getSingleCourse = async (req, res) => {
  try {
    const { id } = req.params.CourseId;

    const course = await Course.findById(id).populate("Users", "email");

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ Course });
  } catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params.CourseId;
    const course = await Course.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ Course });
  } catch (error) {
    console.error("Error updating course:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params.CourseId;
    await Course.findByIdAndDelete(id);
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ message: "Server error" });
  }

};