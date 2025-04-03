const mongoose = require('mongoose');
const User = require('./models/User'); 
const Course = require('./models/Course');

const attendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['present', 'absent'],
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',  
    required: true,
  },
}, {
  timestamps: true,  
});
const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
