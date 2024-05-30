import express from "express"
import { verifyToken } from "../middleware/verifyToken"
import { rateLimitter } from "../middleware/rateLimit"
import { ApplyJobController, CreateJobController, DeleteJobController, GetAllJobsController, RemoveSavedJobController, SaveJobController, SearchJobController, UpdateJobController, getJobApplicationsController, getSavedJobsController, getSingleJobController } from "../controllers/JobControllers"

const router = express.Router()

router.post('/create-job',verifyToken,CreateJobController)
router.post('/apply/:jobId',verifyToken,ApplyJobController)
router.get('/getall-jobs',rateLimitter, GetAllJobsController)
router.get('/get-job/:jobId',getSingleJobController)
router.put('/update-job/:jobId',verifyToken,UpdateJobController)
router.delete('/delete-job/:jobId',verifyToken,DeleteJobController)
router.get('/search-job',verifyToken,SearchJobController)
router.post('/save-job/:jobId',verifyToken,SaveJobController)
router.get('/get-saved-jobs/',verifyToken,getSavedJobsController)
router.get('/get-job-applications/:jobId',verifyToken, getJobApplicationsController)

router.post('/remove-saved-job/:jobId',verifyToken,RemoveSavedJobController)


export default router