import("dotenv").config();
const jwt = import("jsonwebtoken");
const Admin = import("../models/admin");

const auth = async (req, res, next) => {
  try {
    // is tareeke se token ko nikalte haii [0]= bearer token hota hai 
    const token =  req.headers.authorization.split(' ')[1] || req.cookies.token || req.body.token || req.query.token;
      
    console.log(token)

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "token did not found",
      });
    }
    // we are verifying the token here 
    const payload = jwt.verify(token, process.env.jwt_secret);

// 

    if (!payload) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

      req.user = payload;
      next();

  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: "failed to authenticate .....",
    });
  }
};
module.exports={auth};

