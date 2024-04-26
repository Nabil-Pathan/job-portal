import User, { UserType } from "../models/userSchema";
import Job from "../models/jobSchema"
import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'
import pdf from "html-pdf"
import pdfSample  from "../pdf-sample/index";

export const UpdateProfileController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    let { name, email, password, pic } = req.body;

    if (!user) {
      return res.json({ error: "User Not Found" }).status(404);
    }

    if (user._id.toString() !== userId.toString()) {
      return res.json({ error: "Cannot Update Profile" }).status(401);
    }

    // Only hash the password if it is provided
    if (password !== "") {
      password = await bcryptjs.hash(password, 10);
    } else {
      // If password is not provided, remove it from the update object
      password = undefined;
    }

    const updateObject: any = {
      name: name,
      email: email,
      pic: pic,
    };

    if (password !== undefined) {
      updateObject.password = password;
    }

    const updateProfile  = await User.findByIdAndUpdate(userId, {
      $set: updateObject,
    }, { new: true });

    updateProfile?.save();

    const token = jwt.sign({id : updateProfile?._id}, process.env.JWT_SECRET!);

    res.status(200).json({ message: "User Updated", user : updateProfile , token });
  } catch (error: any) {
    console.log(error.message);
    return res.json({ error: "Internal Server Error" }).status(500);
  }
};


export const getCreatedJobs = async (req  : Request | any ,res : Response )=>{
  try {
     const userId = req.user._id

     const user = await User.findById(userId)

     if(!user){
      return res.json({ error: "User Not Found" }).status(404);
     }

     const jobs = await Job.find({postedBy : userId})
     
     return res.json({jobs}).status(200)
     
  } catch (error : any) {
     console.log(error.message);
    return res.json({ error: "Internal Server Error" }).status(500);
  }
}


export const CreateResumeController = async (req : Request  , res : Response)=>{
  try {
    
    pdf.create(pdfSample(req.body), {}).toFile("Resume.pdf", (err) => {
      if (err) {
        res.send(Promise.reject());
        console.log(err);
      }
      res.send(Promise.resolve());
      console.log("Success");
    });

  } catch (error:any) {
    console.log(error);
    return res.json({ error: "Internal Server Error" }).status(500);
    
  }
}



export const getResumeController = async (req : Request  , res : Response)=>{
  try {
    res.sendFile("Resume.pdf", { root: "." });
  } catch (error:any) {
    console.log(error);
    return res.json({ error: "Internal Server Error" }).status(500);
    
  }
}


export const getAllAppliedJobs = async (req : Request | any  , res : Response)=>{
  try {
     const userId = req.user._id
     

     const requestinguser = await User.findById(userId)

     if(!requestinguser){
      return res.json({ error: "User Not Found" }).status(404);
     }
     
     const applications = await Job.find({"applicants.user": userId});
     

     return res.json({applications}).status(200)

  } catch (error:any) {
    console.log(error);
    return res.json({ error: "Internal Server Error" }).status(500);
    
  }
}

