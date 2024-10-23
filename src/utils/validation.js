// const validator = require("validator")
// const  validateSignUpData=(req)=>{
//     const {firstName, lastName, emailId, password}= req.body;
//         if(!firstName || !lastName){
//             throw new Error('Parameter is not a number!');
//         }else if(!validator.isEmail(emailId)){
//             throw new Error("this email not valide")
        
//         }else if(!validator.isStrongPassword(password)){
//             throw new Error('Parameter is not a pass!');
//         }
//         }



// module.exports= validateSignUpData




const validator = require("validator")
const validateSignUpData =(req)=>{
    const {firstName,lastName, emailId, password}= req.body;
    if(!firstName || !lastName){
        throw new Error("no ln and fn");
    }
     if(!validator.isEmail(emailId)){
        throw new Error("no email right");
    }
    //  if(!validator.isStrongPassword(password)){
    //     throw new Error("entered password wrong");
    // }
}

module.exports = validateSignUpData





















