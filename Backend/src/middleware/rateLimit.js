import ratelimit from "../config/upstash.js"


const rateLimiter = async (req, res, next)=>{
    try{
        const {success} = await ratelimit.limit("my-limit-key"); //limit all user when condition meets
        //use userId or ip address inplace of my-limit-key to target specific user

        if(!success){
            return res.status(429).json({
                message: "Too many requests! Try again later"
            });
        }

        next();

    }catch(error){
        console.log("rate limit error");
        next(error);
    }
}

export default rateLimiter