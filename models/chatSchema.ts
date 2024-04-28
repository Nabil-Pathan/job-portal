import mongoose from "mongoose";
import  { Document, Schema, model, ObjectId }  from 'mongoose';
import { UserType } from "./userSchema";

export interface ChatDocument extends Document {
    chatName: string;
    users: UserType[];
    latestMessage: ObjectId;
    groupAdmin: ObjectId;
  }

const chatSchema = new Schema({
    chatName:{
        type: String,
        trim: true
    },
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],

    latestMessage:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
}, { timestamps: true})


const Chat = mongoose.model<ChatDocument>("Chat", chatSchema)


export default Chat