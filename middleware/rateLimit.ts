import redis from "../db/redis";
import { Request , Response , NextFunction} from "express"

export const rateLimitter = async (req : Request,res : Response , next : NextFunction)=>{
    try {
        const ipAddress = req.ip

        const key = `rate-limit:${ipAddress}`;

        const count = await redis.incr(key)

        if(count > 5){
            return res.status(429).json({ error: 'Rate limit exceeded. Try again later.' });
        }

        if (count === 1) {
            await redis.expire(key, 60); // Set expiration to 60 seconds
        }

        next()
    } catch (error:any) {
        console.log(error.message);
        return res.json({ error : "Internal Server Error"}).status(500)
    }
}