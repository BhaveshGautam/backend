import express from "express";


const router = express.Router();
router.get('/enroll/:studentid/:courseid',controllerEnrolleduser)

export default router;