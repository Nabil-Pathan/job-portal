import mongoose, {  Document } from 'mongoose';

export interface JobType extends Document {
  title: string;
  description: string;
  requirements: string[];
  location: string;
  salary: number;
  datePosted: Date;
  company : string,
  postedBy : mongoose.Types.ObjectId,
  applicants :  ApplicationType[];
}

export interface ApplicationType {
    user : mongoose.Schema.Types.ObjectId,
    name : string ,
    email : string,
    jobId: string;
    role: string;
    experience: number;
    resume: string; // File path or storage reference
    coverLetter?: string;
}


const jobSchema = new mongoose.Schema({
    title: {
        type : String,
        required: true
    },
    description: {
        type : String,
        required: true
    },

    requirements: {
        type : [String],
        required: true
    },

    location: {
        type : String,
        required: true
    },

    salary:{ 
        type : Number,
        required: true
    },

    datePosted:{ 
        type : Date,
        default: Date.now
    },

    company :{
        type : String,
        required : true
    },

    postedBy :{
        type : mongoose.Types.ObjectId,
        ref : "User"
    },

    applicants: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
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
    
})

const Job = mongoose.model<JobType>("Job",jobSchema)

export default Job