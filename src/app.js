const auth = require("./middleware/auth");
const User = require("./models/user")
const express = require('express');
const app = express();
// const router = express.Router();
const connectDB = require("./config/m");
const { validationForSignin } = require("./utils/validation")
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const userAuth = require("./middleware/auth");
const getJWT = require("./models/user")
const validatePassword = require("./models/user")

const authRouter = require("./routers/auth");
const router = require("./routers/profileRouter")
const ConnectionModel = require("./models/connectionRequest")
const requestRouter = require("./routers/connectionReqRouter");
const userRouter = require("./routers/user");

app.use(express.json());
app.use(cookieParser())


app.use("/", authRouter);
app.use("/", router);
app.use("/", requestRouter);
app.use("/",userRouter);

app.get("/f", async (req, res) => {
  try {
    // validationForSignin(req);
    const c = new ConnectionModel(req)
    await c.save();

    res.send("c")

  } catch (error) {
    res.send("cc " + error.message)
  }
})


app.get("/profile", userAuth, async (req, res) => {

  try {
    const user = req.user;
    console.log(user);
    res.send(user);
  } catch (error) {
    if (error.message === "not valid token") {
      res.status(404).send(error.message)
    } else if (error.message === " not valid user") {
      res.status(404).send(error.message)
    } else {
      res.status(404).send(error.message)
    }

  }
})

app.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;
  res.send(user.firstName);

})


connectDB().then(() => {
  console.log("we are in database");
  app.listen(3000, () => {
    console.log('Server is running n port 3000');
  });
}).catch(err => console.log(err));

