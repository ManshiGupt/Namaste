const express = require("express");
const authRouter = express.Router();
const User = require('../models/user')
const bcrypt= require("bcrypt");
const {validationForSignin} = require("../utils/validation")
const {getJWT} = require("../models/user");
const { message } = require("antd");


    authRouter.post("/signin",async(req, res)=>{
        const{firstName, lastName, emailId, password}= req.body;
        
        try{
          validationForSignin(req);
          const existingUser = await User.findOne({emailId:emailId});
        if(existingUser){
            throw new Error (" user already exist.");
        }
    
        const hashpassword = await bcrypt.hash(password,10);
    
        const user = new User({firstName, lastName, emailId, password:hashpassword});
        await user.save();
        res.send("sucess")
      }catch(error){
    
        if(error.message === " user already exist."){
          res.status(404).send(error.message);
        }
        else if(error.message === "firstName and lastName is necessary for this action"){
          res.status(404).send(error.message);
        }
        else if(error.message === "no email right"){
          res.status(404).send(error.message);
        } 
        else if(error.message === "Password is not strong enough."){
          res.status(404).send("Password is not strong enough."+ error.message);
        }
        else if(error.message === "entered password wrong"){
          res.status(404).send("entered password wroong"+ error.message);
        }
         else{res.status(404).send("entered password wrong: "+error.message)} 
      }
    })
    authRouter.post("/login",async(req,res)=>{
        const {emailId, password}= req.body;
        try {
    
          const user = await User.findOne({emailId:emailId});
          if(!user){
            throw new Error("User not Exist in email");
          }
          const isPassValid =await user.validatePassword(password)
          if(isPassValid){
            const token = await user.getJWT();
          res.cookie("token", token);
           
          }
          
          res.send("logedin")
          
        } catch (error) {
          if(error.message=== "User not Exist in email" ){
            res.status(404).send(error.message);
          }else if(error.message==="n"){
            res.status(404).send(error.message);
          }else{
            res.status(404).send(error.message);
          }
        }
    })
    
    authRouter.post("/logout", async(req,res)=>{
      res.cookie("token", null,{expires:new Date(Date.now()) })
      res.send({message:"this is"})
    })





module.exports = authRouter;