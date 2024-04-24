import jwt, { JwtPayload } from "jsonwebtoken"
import { Request , Response , NextFunction} from "express"
import User from "../models/userSchema"

export const verifyToken = async (req : Request | any,res : Response,next : NextFunction)=>{
    try {
        const  {  authorization } = req.headers

        if(!authorization){
            return res.json({error : "You must be logged in"}).status(401)
        }

        const token = authorization?.replace("Bearer ", "")

        const decodedToken = jwt.verify(token,process.env.JWT_SECRET!) as JwtPayload

        const user = await User.findById(decodedToken.id)

        if(!user){
            return res.json({error : "You must be logged in"}).status(401)
        }

        req.user = user

        next()
        
    } catch (error:any) {
        console.log(error.message);
        return res.json({error : "Inernal Server error"}).status(500)
    }
}