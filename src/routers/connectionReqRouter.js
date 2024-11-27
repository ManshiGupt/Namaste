const express = require("express");
const userAuth = require("../middleware/auth");
const requestRouter = express.Router();
const ConnectionRequestModel = require("../models/connectionRequest");
const { message } = require("antd");
const User = require("../models/user");
const user = require("../models/user");

requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.toUserId;
      const status = req.params.status;

      //validation for status
      const allowedStatus = ["intersted", "ignored"];
      if (!allowedStatus.includes(status)) {
        return res.json({ message: "status in params is not allowed" });
      }
      //toUserId should be in user collection

      const existConnection = await ConnectionRequestModel.findOne({
        $or: [
          { fromUserId, toUserId },
          { fromUserId: toUserId, toUserId: fromUserId },
        ],
      });

      if(existConnection){
        return res.status(400).send("erooe while existConnection ");
      }
      //toUserId exist

      const validtoUserId= await User.findById(toUserId);
      if(!validtoUserId){
        return res.status(400).send("erooe while toUserId doesnot existS ");
      }
      const dataa = new ConnectionRequestModel({ fromUserId, toUserId, status });
      const data= await dataa.save();

      res.json({ message: req.user.firstName+ " is "+ validtoUserId.firstName, data });
    } catch (error) {
      res.status(400).send("erooe while routing connection: " + error.message);
      // res.status(400).json({ message: "Error while routing connection", error: error.message });
    }
  }
);


requestRouter.post(
  "/request/review/:status/:requestId",
  userAuth,
  async (req, res) => {
    try {
      const {status,requestId }= req.params;
      
      const loggedInUser = req.user;
      const allowedStatus = ["accepted", "rejected"];
      const isAllowedStatus = allowedStatus.includes(status);
      if (!isAllowedStatus) {
        return res.status(400).send("errror to0 "+ error.message)
      }
      const connectionRequest = await ConnectionRequestModel.findOne({
        _id: requestId,
        toUserId: loggedInUser._id,
        status: "intersted",
      });
      if(!connectionRequest){
        return res.status(400).json({ message: "validatetoUserId not find" });
      }
      connectionRequest.status = status;
      const data = await connectionRequest.save();
      res.json({ message: "All the request came to you "+ req.user.firstName ,data});
    } catch (error) {
      res.status(400).send("errror to "+ error.message)
    }
  }
);
module.exports = requestRouter;
