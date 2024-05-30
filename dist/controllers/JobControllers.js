"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobApplicationsController = exports.getSavedJobsController = exports.RemoveSavedJobController = exports.SaveJobController = exports.getSingleJobController = exports.SearchJobController = exports.ApplyJobController = exports.GetAllJobsController = exports.DeleteJobController = exports.UpdateJobController = exports.CreateJobController = void 0;
const jobSchema_1 = __importDefault(require("../models/jobSchema"));
const userSchema_1 = __importDefault(require("../models/userSchema"));
const redis_1 = __importDefault(require("../db/redis"));
const CreateJobController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, requirements, location, salary, company } = req.body;
        if (!title || !description || !requirements || !location || !salary) {
            return res.json({ message: "Please Provide all the Details" }).status(400);
        }
        const newJob = yield jobSchema_1.default.create({
            title, description, requirements, location, salary, company, postedBy: req.user._id
        });
        redis_1.default.del("jobs");
        return res.json({ message: "Job Created", newJob }).status(201);
    }
    catch (error) {
        console.log(error.message);
        return res.json({ message: "Inernal server error" }).status(500);
    }
});
exports.CreateJobController = CreateJobController;
const UpdateJobController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobId = req.params.jobId;
        const { title, description, requirements, location, salary } = req.body;
        const job = yield jobSchema_1.default.findById(jobId);
        if (!job) {
            return res.json({ message: "Job Not Found" }).status(400);
        }
        const updatedJob = yield jobSchema_1.default.findByIdAndUpdate(jobId, {
            title, description, requirements, location, salary
        });
        updatedJob === null || updatedJob === void 0 ? void 0 : updatedJob.save();
        yield redis_1.default.del("jobs");
        return res.json({ message: "Job Updated", updatedJob }).status(200);
    }
    catch (error) {
        console.log(error.message);
        return res.json({ message: "Inernal server error" }).status(500);
    }
});
exports.UpdateJobController = UpdateJobController;
const DeleteJobController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobId = req.params.jobId;
        const job = yield jobSchema_1.default.findById(jobId);
        if (!job) {
            return res.json({ message: "Job Not Found" }).status(400);
        }
        yield jobSchema_1.default.findByIdAndDelete(jobId);
        yield redis_1.default.del("jobs");
        return res.json({ message: "Job Deleted" }).status(200);
    }
    catch (error) {
        console.log(error.message);
        return res.json({ message: "Inernal server error" }).status(500);
    }
});
exports.DeleteJobController = DeleteJobController;
const GetAllJobsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobExists = yield redis_1.default.exists("jobs");
        if (jobExists) {
            console.log('Get From Cache');
            const jobs = yield redis_1.default.get("jobs");
            if (jobs) {
                return res.json({ jobs: JSON.parse(jobs) }).status(200);
            }
        }
        const jobs = yield jobSchema_1.default.find({});
        yield redis_1.default.set("jobs", JSON.stringify(jobs));
        return res.json({ jobs }).status(200);
    }
    catch (error) {
        console.log(error.message);
        return res.json({ message: "Inernal server error" }).status(500);
    }
});
exports.GetAllJobsController = GetAllJobsController;
const ApplyJobController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobId = req.params.jobId;
        const userId = req.user._id;
        const job = yield jobSchema_1.default.findById(jobId);
        if (!job) {
            return res.json({ message: "Job Not Found" }).status(400);
        }
        const existingApplication = job.applicants.find(applicant => applicant.user.toString() === userId.toString());
        if (existingApplication) {
            return res.json({ message: "You have already applied to this job" }).status(400);
        }
        const newApplication = {
            user: userId,
            name: req.body.name,
            email: req.body.email,
            jobId: jobId,
            role: req.body.role,
            experience: req.body.experience,
            resume: req.body.resume,
            coverLetter: req.body.coverLetter
        };
        job.applicants.push(newApplication);
        yield job.save();
        return res.json({ message: "Application submitted successfully" }).status(200);
    }
    catch (error) {
        console.log(error.message);
        return res.json({ message: "Inernal server error" }).status(500);
    }
});
exports.ApplyJobController = ApplyJobController;
const SearchJobController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchQuery } = req.query;
        const regexSearchQuery = searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.toString();
        const searchCriteria = {
            $or: [
                { title: { $regex: regexSearchQuery, $options: 'i' } },
                { description: { $regex: regexSearchQuery, $options: 'i' } },
                { location: { $regex: regexSearchQuery, $options: 'i' } },
                { requirements: { $regex: regexSearchQuery, $options: 'i' } },
            ]
        };
        const results = yield jobSchema_1.default.find(searchCriteria);
        return res.json({ jobs: results }).status(200);
    }
    catch (error) {
        console.log("Error in Controller : ", error.message);
        return res.json({ message: "Internal server error" }).status(500);
    }
});
exports.SearchJobController = SearchJobController;
const getSingleJobController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobId = req.params.jobId;
        const job = yield jobSchema_1.default.findById(jobId).populate("postedBy");
        if (!job) {
            return res.json({ message: "Job Not Found" }).status(400);
        }
        return res.json({ job }).status(200);
    }
    catch (error) {
        console.log(error.message);
        return res.json({ message: "Inernal server error" }).status(500);
    }
});
exports.getSingleJobController = getSingleJobController;
const SaveJobController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobId = req.params.jobId;
        const userId = req.user._id;
        const job = yield jobSchema_1.default.findById(jobId);
        if (!job) {
            return res.json({ message: "Job Not Found" }).status(400);
        }
        const user = yield userSchema_1.default.findById(userId);
        if (user === null || user === void 0 ? void 0 : user.savedJobs.includes(jobId)) {
            return res.json({ message: "Job Already saved" }).status(400);
        }
        user === null || user === void 0 ? void 0 : user.savedJobs.push(jobId);
        yield (user === null || user === void 0 ? void 0 : user.save());
        return res.json({ message: "Job Saved", savedJobs: user === null || user === void 0 ? void 0 : user.savedJobs }).status(200);
    }
    catch (error) {
        console.log(error.message);
        return res.json({ message: "Inernal server error" }).status(500);
    }
});
exports.SaveJobController = SaveJobController;
const RemoveSavedJobController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobId = req.params.jobId;
        const userId = req.user._id;
        const job = yield jobSchema_1.default.findById(jobId);
        if (!job) {
            return res.json({ message: "Job Not Found" }).status(400);
        }
        const user = yield userSchema_1.default.findById(userId);
        if (!(user === null || user === void 0 ? void 0 : user.savedJobs.includes(jobId))) {
            return res.json({ message: "Job Not Found" }).status(400);
        }
        user.savedJobs = user === null || user === void 0 ? void 0 : user.savedJobs.filter((_id) => _id.toString() !== jobId.toString());
        yield (user === null || user === void 0 ? void 0 : user.save());
        console.log(user.savedJobs);
        return res.json({ message: "Job Removed", savedJobs: user === null || user === void 0 ? void 0 : user.savedJobs }).status(200);
    }
    catch (error) {
        console.log(error.message);
        return res.json({ message: "Inernal server error" }).status(500);
    }
});
exports.RemoveSavedJobController = RemoveSavedJobController;
const getSavedJobsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user._id;
        const user = yield userSchema_1.default.findById(userId).populate('savedJobs');
        if (!user) {
            return res.json({ message: "User Not Found" }).status(400);
        }
        return res.json({ savedJobs: user.savedJobs }).status(200);
    }
    catch (error) {
        console.log(error.message);
        return res.json({ message: "Inernal server error" }).status(500);
    }
});
exports.getSavedJobsController = getSavedJobsController;
const getJobApplicationsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobId = req.params.jobId;
        const userId = req.user._id;
        const job = yield jobSchema_1.default.findById(jobId);
        const user = yield userSchema_1.default.findById(userId);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        if (!user) {
            return res.json({ message: "User Not Found" }).status(400);
        }
        const applications = job.applicants;
        return res.status(200).json({ applications });
    }
    catch (error) {
        console.log(error.message);
        return res.json({ message: "Inernal server error" }).status(500);
    }
});
exports.getJobApplicationsController = getJobApplicationsController;
