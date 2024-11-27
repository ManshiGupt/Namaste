// const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const { default: mongoose } = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: false,
        maxLength:20
    },
    lastName:{
        type:String,
    },
    emailId:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,  //automatically gives index
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("this email not valid")
            }

        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("not a valid strong pass")
            }
        }
    },
    age:{
        type:Number,
        min:18
    },
    about:{
        type:String,
        default:"you are someone who is hot"
    },
    profileUrl:{
        type:String,
        // validate(value){
        //     if(!validator.isDataURI(value)){
        //         throw new Error("not a valide url");
        //     }
        // }
    },
    gender:{
        type:String,
        validate(value){
                if(!["female","male","other"].includes(value)){
                    throw new Error("gender sahi se daalo") 
                }
        }
    },
    skill:{
        type:[String]
        
    }

},{timestamps:true})

userSchema.methods.getJWT = async function () {
    const user= this;
    const token = await jwt.sign({_id: user._id},"secret", {expiresIn: '1h'});
    return token
}

// userSchema.methods.geti = async function () {
//     const user= this;
//     const hashpassword = await bcrypt.hash(user.password,10);
//     return hashpassword
// }

userSchema.methods.validatePassword = async function (inputPassword) {

    const user = this;
    const isPassValid =await bcrypt.compare(inputPassword, user.password);
    return isPassValid
    
}
module.exports = mongoose.model("User",userSchema);



