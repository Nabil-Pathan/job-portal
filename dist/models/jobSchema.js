"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const jobSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type: [String],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    company: {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "User"
    },
    applicants: [
        {
            user: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            jobId: {
                type: String,
                required: true
            },
            role: {
                type: String,
                required: true
            },
            experience: {
                type: Number,
                required: true
            },
            resume: {
                type: String,
                required: true
            },
            coverLetter: {
                type: String,
                default: ""
            }
        }
    ]
});
const Job = mongoose_1.default.model("Job", jobSchema);
exports.default = Job;
