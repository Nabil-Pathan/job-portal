import { Document } from "mongoose";
import mongoose from "mongoose";

export interface UserType extends Document {
    _id: string
    name : string
    email : string
    password : string
    pic : string
    savedJobs : mongoose.Types.ObjectId[],
}

const userSchema = new mongoose.Schema({
    name :{
        type : String ,
        required : true
    } ,
    email : {
        type : String ,
        required : true,
        unique : true
    },
    password :{
        type : String ,
        required : true
    },
    pic :{
        type : String ,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },


    savedJobs : [
        {
            type : mongoose.Types.ObjectId,
            ref : "Job"
        }
    ]

}, { timestamps : true})

const User = mongoose.model<UserType>("User",userSchema)

export default User