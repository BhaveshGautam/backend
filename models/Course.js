const mongoose = require('mongoose');
const User = require('./models/User'); 
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
  }],
  totalMarks: {
    type: Number,
    required: true,
  },
  coursecode: {
    type: String,
    required: true,
    unique: true,  
  },
  coursename:{
    type:String,
    required:true
  }
}, {
  timestamps: true,  
});
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
