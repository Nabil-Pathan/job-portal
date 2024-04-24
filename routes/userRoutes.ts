import express from "express"
import { CreateResumeController, UpdateProfileController, getAllAppliedJobs, getCreatedJobs, getResumeController } from "../controllers/userControllers"
import { verifyToken } from "../middleware/verifyToken"
const router = express.Router()

router.post('/update-profile/:userId', verifyToken , UpdateProfileController)
router.get('/get-created-jobs/:userId', verifyToken , getCreatedJobs)
router.post('/create-resume', verifyToken , CreateResumeController)
router.get('/fetch-pdf' , getResumeController)
router.get('/get-applied-jobs' ,verifyToken, getAllAppliedJobs)


export default router