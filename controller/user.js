const User =('..\models\User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const signup=async(req,res)=>{
    try{
        const {Name,Email,Password,Section,Branch,year,RollNo}=req.body;
        if(!Name ||!Email ||!Password ||!Section ||!Branch ||!year ||!RollNo){
            return res.status(400).json({
                success:false,
                message: "kindly provide complete details"
            })
        }
        const existingUser = await User.findOne({Email});
        // check kr rhe hai ki user exist krta bhi ya nahii
        if(existingUser){
            return res.status(400).json({
                success:false,
                message: "Email already exists"
                });
        }
        
        // await mtlab ki jab tk hashing pura na ho tab tk next loc ni chlega 
        // 10 means more iteration for strongly hashing the password 
        const hashedPassword = await bcrypt.hash(Password,10)

        if(!hashedPassword){
            return res.status(401).json({
                success:false,
                message:'password did not hashed....'
            })
        }
        // { bracket mei ek object paas kia hai jo database m save ho jaye}
        // await means jab tk data create hokr databse mei save na ho tab tk code ruka 
        // rhega then response mei store hoga 
        const response  = await User.create({Name, Email, password:hashedPassword})

        res.status(200).json({
            success:true,
            message:'acount created successfully...',
            response: data,
            // yha pr vo data return as response hoga jo user.create krta hai database mei 
        })
   }
   catch{
    res.status(500).json({
        success:false,
        message:'Internal server error'
        });
   }
}