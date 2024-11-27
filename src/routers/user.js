const express = require("express");
const userAuth = require("../middleware/auth");
const connectionRequest = require("../models/connectionRequest");
const User= require("../models/user")
const userRouter = express.Router();
const ALLOWED_DATA = "firstName lastName profileUrl age gender about skill";

userRouter.get("/user/requests/received", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    const reeq = await connectionRequest
      .find({
        toUserId: loggedInUser._id,
        status: "intersted",
      })
      .populate("fromUserId", ALLOWED_DATA);
    if (!reeq) {
      return res.status(400).send("not found any req");
    }

    res.json({ message: "loji", reeq });
  } catch (error) {
    res.status(400).send("so err", error.message);
  }
});

userRouter.get("/user/connections", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const data = await connectionRequest
      .find({
        $or: [
          { toUserId: loggedInUser._id, status: "accepted" },
          { fromUserId: loggedInUser._id, status: "accepted" },
        ],
      })
      .populate("toUserId", ALLOWED_DATA)
      .populate("fromUserId", ALLOWED_DATA);

    const k = data.map((ram) => {
      if (ram.toUserId._id.toString() === loggedInUser._id.toString()) {
        return ram.fromUserId;
      }
      return ram.toUserId;
    });

    res.send(k);
  } catch (error) {
    res.status(400).json({ message: "errror" });
  }
});

userRouter.get("/feed", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    // const{page,limit} = req.query;

    const page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 10;
    limit = limit > 50 ? 50 : limit;
    const skip = (page - 1) * limit;

    
    const allConnectionToHide = await connectionRequest.find({
      $or: [
        { toUserId:  loggedInUser._id},
        { fromUserId:  loggedInUser._id  },
      ],
    }).select('toUserId fromUserId')

    const hideUser = new Set();
    
    allConnectionToHide.forEach((ram)=>{
        hideUser.add(ram.toUserId.toString());
        hideUser.add(ram.fromUserId.toString());
        
    })

    const users = await User.find({
       $and: [
       {_id:{ $nin:Array.from(hideUser)}},
      {  _id: {$ne: loggedInUser._id}}
    ]

    }).select(ALLOWED_DATA)
    .skip(skip).limit(limit)
// console.log(hideUser);
    res.json({data:users});
  } catch (error) {
    res.status(400).send("lo ji error ho gya", error.message);
  }
});
module.exports = userRouter;
