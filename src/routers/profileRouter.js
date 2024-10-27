const express = require("express");
const router = express.Router()
const User = require("../models/user")
const userAuth = require("../middleware/auth");
const { message } = require("antd");
const {validationForProfileEdit} = require("../utils/validation")
// const User = require("../models/user")


router.get("/view", userAuth, (req, res) => {
   try {
      const user = req.user;
      if (!user) {
         throw new Error("user not found");
      }
      res.send(user);
   } catch (err) {
      res.status(400).send(err.message);
   }

})



router.patch("/edit", userAuth, async (req, res) => {

   const loggedInUser = req.user;
   try {
       validationForProfileEdit(req);

       Object.keys(req.body).forEach((key)=>loggedInUser[key]= req.body[key])
       


      //  const usere = User.findByIdAndUpdate(loggedInUser._id,{loggedInUser})
       await loggedInUser.save()

      res.send(loggedInUser)
   } catch (error) {
      res.send(error.message)
   }   
})


module.exports = router