
// /:courseID/attendance
const getCourseAttendance = async (req,res)=>{
    try {
        if(!req.admin){
            return res.status(401).json({message:"Unauthorized"});
        }
        const id = req.params.courseId;
        const course = await course.findById(id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        const attendance = await attendance.find({ course: id });
        res.json(attendance);
    } catch (error) {
        res.status(500).json({ message: "Error fetching attendance" });
    }
}

const createCourse = async (req, res) => {
    try {
      const { title } = req.body;
  
      if (!title) {
        return res.status(400).json({ message: "Course title is required." });
      }
  
      const newCourse = new Course({ title });
      await newCourse.save();
      res.status(201).json({ message: "Course created successfully", course: newCourse });
    } catch (error) {
      console.error("Error creating course:", error);
      res.status(500).json({ message: "Server error" });
    }
  };