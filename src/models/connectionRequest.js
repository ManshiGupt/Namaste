const mongoose= require("mongoose");


const connectionRequestSchema= new mongoose.Schema({
    toUserId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    fromUserId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    status:{
        type:String,
        enum:{
            values:["intersted","ignored", "accepted","rejected"],
            message:"{VALUE} does not supported in status "
        }
    }
}, {timeStamps: true})

// const ConnectionModel = mongoose.model("ConnectionModel", connectionSchema)
//validation for touserId= FromuserId

connectionRequestSchema.index({toUserId:1, fromUserId:1});

connectionRequestSchema.pre('save',function(next){
    const connectionRequest= this;
    if(connectionRequest.toUserId.equals(connectionRequest.fromUserId)){
        throw new Error("You cannot send request to yourself");
    }
    next();

})
module.exports = new mongoose.model("ConnectionRequestModel", connectionRequestSchema)