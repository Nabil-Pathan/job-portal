import { Request, Response } from "express"
import Job, { ApplicationType } from "../models/jobSchema"
import User from "../models/userSchema"
import redis from "../db/redis"

export const CreateJobController = async (req: Request | any, res: Response) => {
    try {
        const { title,description,requirements,location, salary , company } = req.body

        if(!title || !description || !requirements || !location || !salary ){
            return res.json({message : "Please Provide all the Details"}).status(400)
        }

        const newJob = await Job.create({
            title,description,requirements,location, salary , company ,  postedBy : req.user._id
        })

        redis.del("jobs")

        return res.json({message : "Job Created", newJob}).status(201)
    } catch (error: any) {
        console.log(error.message);
        return res.json({message : "Inernal server error"}).status(500)
    }
}


export const UpdateJobController = async (req: Request, res: Response) => {
    try {

        const jobId = req.params.jobId

        const { title,description,requirements,location, salary } = req.body
        
        const job = await Job.findById(jobId)

        if(!job){
            return res.json({message : "Job Not Found"}).status(400)
        }

        const updatedJob = await Job.findByIdAndUpdate(jobId,{
            title,description,requirements,location, salary
        })

        updatedJob?.save()

        await redis.del("jobs")

        return res.json({message : "Job Updated", updatedJob}).status(200)
    } catch (error: any) {
        console.log(error.message);
        return res.json({message : "Inernal server error"}).status(500)
    }
}



export const DeleteJobController = async (req: Request, res: Response) => {
    try {

        const jobId = req.params.jobId
        
        const job = await Job.findById(jobId)

        if(!job){
            return res.json({message : "Job Not Found"}).status(400)
        }

        await Job.findByIdAndDelete(jobId)

        await redis.del("jobs")

        return res.json({message : "Job Deleted"}).status(200)
    } catch (error: any) {
        console.log(error.message);
        return res.json({message : "Inernal server error"}).status(500)
    }
}



export const GetAllJobsController = async (req: Request, res: Response) => {
    try {
        const jobExists = await redis.exists("jobs")

        if(jobExists){
            console.log('Get From Cache');
            const jobs = await redis.get("jobs")
            if (jobs) {
                return res.json({jobs : JSON.parse(jobs)}).status(200)
            }
        }
        const jobs = await Job.find({})

        await redis.set("jobs", JSON.stringify(jobs))

        return res.json({jobs}).status(200)

    } catch (error: any) {
        console.log(error.message);
        return res.json({message : "Inernal server error"}).status(500)
    }
}



export const ApplyJobController = async (req: Request | any, res: Response) => {
    try {
        const jobId = req.params.jobId
        const userId = req.user._id 

        const job = await Job.findById(jobId)

        if(!job){
            return res.json({message : "Job Not Found"}).status(400)
        }

        const existingApplication = job.applicants.find(applicant => applicant.user.toString() === userId.toString())

        if(existingApplication){
            return res.json({message : "You have already applied to this job"}).status(400)
        }

        const newApplication: ApplicationType = {
            user: userId,
            name : req.body.name ,
            email : req.body.email,
            jobId: jobId,
            role: req.body.role,
            experience: req.body.experience,
            resume: req.body.resume,
            coverLetter: req.body.coverLetter
        }
        

         job.applicants.push(newApplication)

         await job.save()

         return res.json({message : "Application submitted successfully"}).status(200)

    } catch (error: any) {
        console.log(error.message);
        return res.json({message : "Inernal server error"}).status(500)
    }
}


export const SearchJobController = async (req: Request, res: Response) => {
    try {        

               
        const { searchQuery } = req.query;


        const regexSearchQuery = searchQuery?.toString();

        const searchCriteria = {
            $or: [
                { title: { $regex: regexSearchQuery, $options: 'i' } },
                { description: { $regex: regexSearchQuery, $options: 'i' } },
                { location: { $regex: regexSearchQuery, $options: 'i' } },
                { requirements: { $regex: regexSearchQuery, $options: 'i' } },
            ]
        }

        const results = await Job.find(searchCriteria)

        return res.json({ jobs: results }).status(200)

    } catch (error: any) {
        console.log("Error in Controller : ",error.message);
        return res.json({ message: "Internal server error" }).status(500)
    }
}


export const getSingleJobController = async (req: Request, res: Response) => {
    try {
        const jobId = req.params.jobId

        const job = await Job.findById(jobId).populate("postedBy")

        if(!job){
            return res.json({message : "Job Not Found"}).status(400)
        }

        return res.json({job}).status(200)

    } catch (error: any) {
        console.log(error.message);
        return res.json({message : "Inernal server error"}).status(500)
    }
}


export const SaveJobController = async (req: Request | any, res: Response) => {
    try {
        const jobId = req.params.jobId

        const userId = req.user._id

        const job = await Job.findById(jobId)

        if(!job){
            return res.json({message : "Job Not Found"}).status(400)
        }


        const user = await User.findById(userId)
        
        if(user?.savedJobs.includes(jobId)){
            return res.json({message : "Job Already saved"}).status(400)
        }

        user?.savedJobs.push(jobId)

        await user?.save()

        return res.json({message : "Job Saved", savedJobs : user?.savedJobs}).status(200)

    } catch (error: any) {
        console.log(error.message);
        return res.json({message : "Inernal server error"}).status(500)
    }
}


export const RemoveSavedJobController = async (req: Request | any, res: Response) => {
    try {
        const jobId = req.params.jobId

        const userId = req.user._id

        const job = await Job.findById(jobId)

        if(!job){
            return res.json({message : "Job Not Found"}).status(400)
        }


        const user = await User.findById(userId)
        
        if(!user?.savedJobs.includes(jobId)){
            return res.json({message : "Job Not Found"}).status(400)
        }

        user.savedJobs = user?.savedJobs.filter((_id)=> _id.toString() !== jobId.toString())

        await user?.save()

        console.log(user.savedJobs);
        

        return res.json({message : "Job Removed", savedJobs : user?.savedJobs}).status(200)

    } catch (error: any) {
        console.log(error.message);
        return res.json({message : "Inernal server error"}).status(500)
    }
}


export const getSavedJobsController = async (req: Request | any, res: Response) => {
    try {
     
        const userId = req.user._id

        const user = await User.findById(userId).populate('savedJobs');
        
        if(!user){
            return res.json({message : "User Not Found"}).status(400)
        }
        
        return res.json({ savedJobs: user.savedJobs }).status(200);

    } catch (error: any) {
        console.log(error.message);
        return res.json({message : "Inernal server error"}).status(500)
    }
}


export const getJobApplicationsController = async (req: Request | any, res: Response) => {
    try {

        const jobId = req.params.jobId
     
        const userId = req.user._id


        const job = await Job.findById(jobId)

        const user = await User.findById(userId)

        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        
        if(!user){
            return res.json({message : "User Not Found"}).status(400)
        }
        
        const applications = job.applicants;

        return res.status(200).json({ applications });


    } catch (error: any) {
        console.log(error.message);
        return res.json({message : "Inernal server error"}).status(500)
    }
}