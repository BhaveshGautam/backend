require("dotenv").config();
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");



const auth = async (req, res, next) => {
  try {
    const token =  req.headers.authorization.split(' ')[1] || req.cookies.token || req.body.token || req.query.token;
      
    console.log(token)

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "token did not found",
      });
    }

    const payload = jwt.verify(token, process.env.jwt_secret);

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

