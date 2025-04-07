// create function for getting all the courses and single courses
import Course from "../models/Course.js";
import User from "../models/Course.js";
export const getAllCoursesWithUsers = async (req, res) => {
    try {
      const courses = await Course.find().populate("Users", "email"); // you can choose fields
  
      res.status(200).json({Course});
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Server error" });
    }
  };

  const getSingleCourse = async (req, res) => {
    try {
      const { id } = req.params;
  
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
  // updating the  course
          
            
            
  