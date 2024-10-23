const express= require("express");
const router=  express.Router()

const userAuth= require("../middleware/auth")


   router.get("/view",userAuth,(req,res)=>{
      try{ 
         const user = req.user;
        if(!user){
            throw new Error("user not found");
        }
        res.send(user);
    }catch(err){
            res.status(400).send(err.message);
    }

   })

   router.patch("/edit",async(req,res)=>{
      res.send({message:"Edited success"});
   })


module.exports = router