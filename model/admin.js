const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true,  
    unique: true,   
    lowercase: true, 
    match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: true,  
    minlength: [6, 'Password must be at least 6 characters long'], 
  },
}, {
  timestamps: true,  
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
