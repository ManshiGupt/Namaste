const jwt = require("jsonwebtoken");
const User = require("../models/user")


const userAuth = async (req,res,next) => {
    
    try {
        
        const token= req.cookies.token;
        console.log(token);
    if(!token){
        throw new Error("not valid token");
    }
    
    const decodeObj =await jwt.verify(token, "secret");
    const {_id} =decodeObj;

    const user = await User.findById(_id);
    if(!user){
        throw new Error("user not found");
    }
    req.user= user ;
    next();

    } catch (error) {
        
        res.status(404).send(error.message);
    }
}


module.exports = userAuth;