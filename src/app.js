const auth = require("./middleware/auth");
// // const express = require("express");
// const express = require('express');

// const app = express();
// const port= 7777;


// // app.get('/',(req,res)=>{
// //     console.log("Hello there");
// // })


// // app.use('/test',(req,res)=>{
// //     console.log(req.query());
// //     res.send("this is test")
// // })
// // app.use('/et',(req, res)=>{
// //     res.send("bd");
// // })


// // app.post("/user",(req,res)=>{
// //     res.send("This is post respone!");
// // })

// // app.patch("/",(req,res)=>{
// //     res.send("This is post response!");
// // })
// // app.put("/user",(req,res)=>{
// //     res.send("This is post response!");
// // })

// // app.use("/user",[( req,res,next)=>{
// //     // 
// //     next();
// //     console.log(Date.now());
// //     console.log(res.mNbx="shus");
//     // res.send("Thsi is get 1");
   
// // },
// // (req,res)=>{
// //     res.send("This is two");
// //     // next();
// //     console.log("This is two");
// // }],
// // (req,res, next)=>{
// //     // res.send("This is 3");
// //     next();
// //     console.log("dbhbfh");
// // },
// // (req,res, next)=>{
// //     // res.send("This is 4");
// //     next();
// //     console.log("dbhbfh");
// // },
// // (req,res)=>{
// //     res.send("This is 5");
// //     // next();
// //     console.log("dbhbfh");
// // }
// //)


// // app.use((req, res,next)=>{
// //     console.log("me use");
// //     console.log(req.params);
// //     const a = "xyz";
    
// //     if(a == "xyz"){
// //         // res.status(404).send("no  ddfound");
// //         console.log("a use");
// //         next('route');
// //     }else{
// //         // next();
// //     }
// //     // next();
// // })

// // app.get("/admin/:id",(req,res)=>{
// //     res.send("data user");

// // })
// // app.get("/admin/:id",(req,res)=>{
// //     res.send("data manshi");

// // })
// // app.get("/admin/user/it",(req,res)=>{
// //     res.send("data it");

// // })
// // app.get('/user/:id', (req, res, next) => {
// //     console.log('ID:', req.params.id)
// //     next()
// //   }, (req, res) => {
// //     res.send('User Info')
// //   })
  
//   // handler for the /user/:id path, which prints the user ID
// //   app.get('/user/:id', (req, res, next) => {
// //     res.send(req.params.id)
// //     console.log('IccD:')
// //   })




// // const http = require('node:http');

// // const hostname = '127.0.0.1';
// // const port = 3000;

// // const server = http.createServer((req, res) => {
// //   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
// //   res.end('Hello, Wrld!\n');

// // });

// // server.listen(port, hostname, () => {
// //   console.log(`Server running at http://${hostname}:${port}/`);
// // });

// app.use("/",(req,res,next)=>{
//     console.log("this is use!");
//     // res.send("this is use");

//     const x= "234";
//     if(x=== "234"){
//         res.send("i am  suthoried")
//         // next();
//     }else{
//         console.log("this is anuthorized!");
//         res.send("i am not suthoried")
//     }
//     next();
    
// })

// // function rh1 (req,res, next){
// //     console.log("this is rh1");
// //     next();
// // }
// // app.get("/admin/manshi",(req,res,next)=>{
// //     console.log("this is get manshi!");
// //     // res.send("this is get");
// //     next();
// // })
// // app.get("/admin/anshi",(req,res)=>{
// //     console.log("this is anshi!");
// //     res.send("this is get");
// // })

// app.get("/admin",(req,res)=>{
//   console.log("this is get admin");
//   res.send("/user")
// })

// app.get("/admin/user",(req,res)=>{
//   console.log("this is ise user")
//   res.send("/user")
// })

// app.get("/admin/it",(err,req,res)=>{
//   console.log("this is ise it")
  
 
// })



// app.listen(port,()=>{
//     console.log("Example app listening on port 7777");
// })
// app.use("/admin",auth,(req,res,next)=>{
//     console.log("this is use");
//     res.send("this is admin");
// })

// app.get("/user",async (req,res)=>{
//   try{

//    const users= await User.find({emailId: req.body.emailId});
//    if(users.length===0){
//      res.status(400).send("datta not found")
//    }else{
     
//      res.send(users);
//    }
   

//   }catch(err){
//      res.send("something went wrong");
//   }

// })

// app.get("/feed",async(req,res)=>{
//  try{
//    const user= await User.find({});
//    res.send(user);

//  }catch(err){
//    res.send(err+ "something went wrong")
//  }
// })

// app.delete("/user",async(req,res)=>{
// // console.log(req.body.userId)
//  try {
//    const user = await User.findByIdAndDelete(req.body.userId);
//    res.send("de")
   
//  } catch (error) {
//    res.send("errr")
//  }
// })
// app.patch("/user/:userId",async(req,res)=>{
//   const userId = req.params?.userId;
//   const data= req.body;
//   // const { userId, skill, ...data } = req.body;
//   console.log(data)
//   console.log(userId)
//     try {
//       const user = await User.findByIdAndUpdate(userId,{data},{
//         returnDocument:"before",
//         runValidators: true
//       });
//       // if(data?.skill.length>2){
//       //   throw new Error("uui")
//       // }else{
//         res.send("updated")
//       //}
      
//     } catch (error) {
//       res.send("err")
//     }
  
//   })
  


const User = require("./models/user")
const express = require('express');
const app = express();
// const router = express.Router();
const connectDB= require("./config/m");
const {validationForSignin}= require("./utils/validation")
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const userAuth= require("./middleware/auth");
const getJWT = require("./models/user")
const validatePassword = require("./models/user")

const authRouter = require("./routers/auth");
const router = require("./routers/profileRouter")
 
app.use(express.json());
app.use(cookieParser())


app.use("/",authRouter);
app.use("/profile",router);

app.get("/f",(req,res)=>{
  try {
    validationForSignin(req);
    res.send("dj")
  } catch (error) {
    res.send("cc"+error.message)
  }
})

// app.post("/signin",async(req, res)=>{
//     const{firstName, lastName, emailId, password}= req.body;
    
//     try{
//       validateSignUpData(req);
//       const existingUser = await User.findOne({emailId:emailId});
//     if(existingUser){
//         throw new Error (" user already exist.");
//     }

//     const hashpassword = await bcrypt.hash(password,10);

//     const user = new User({firstName, lastName, emailId, password:hashpassword});
//     await user.save();
//     res.send("sucess")
//   }catch(error){

//     if(error.message === " user already exist."){
//       res.status(404).send(error.message);
//     }
//     else if(error.message === "no ln and fn"){
//       res.status(404).send(error.message);
//     }
//     else if(error.message === "no email right"){
//       res.status(404).send(error.message);
//     }
//     else if(error.message === "entered password wrong"){
//       res.status(404).send("entered password wrong"+ error.message);
//     }
//      else{res.status(404).send("entered password wrong"+error.message)} 
//   }
// })
// app.post("/login",async(req,res)=>{
//     const {emailId, password}= req.body;
//     try {

//       const user = await User.findOne({emailId:emailId});
//       if(!user){
//         throw new Error("User not Exist in email");
//       }
//       const isPassValid =await user.validatePassword(password)
//       if(!isPassValid){
//         throw new Error("n")
       
//       }
//       const token = await user.getJWT();
//       res.cookie("manshi", token);
//       res.send("logedin")
      
//     } catch (error) {
//       if(error.message=== "User not Exist in email" ){
//         res.status(404).send(error.message);
//       }else if(error.message==="n"){
//         res.status(404).send(error.message);
//       }else{
//         res.status(404).send(error.message);
//       }
//     }
// })

app.get("/profile",userAuth,async(req,res)=>{
  
      try {
        const user =req.user;
        console.log(user);
        res.send(user);
      } catch (error) {
        if(error.message=== "not valid token"){
          res.status(404).send(error.message)
        }else if(error.message===" not valid user" ){
          res.status(404).send(error.message)
        }else{
          res.status(404).send(error.message)
        }
        
      }
})

app.post("/sendConnectionRequest",userAuth ,async(req,res)=>{
  const user = req.user;
  res.send(user.firstName);

})


connectDB().then(()=>{
  console.log("we are in database");
  app.listen(3000, () => {
    console.log('Server is running n port 3000');
  });
}).catch(err => console.log(err));

