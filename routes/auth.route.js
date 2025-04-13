const express = require("express");
const { login, signup, isAdmin, isStudent } = require("../controller/user");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
module.exports = router;