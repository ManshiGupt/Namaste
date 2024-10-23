// const mongoose = require("mongoose");

// const connectDB = async()=>{
//     await mongoose.connect("mongodb+srv://heymanshigupta:<db_password>@namastecluster.ebvtp.mongodb.net/");
// }

// connectDB()
// .then(()=>{ console.log("database is connected")} )
// .catch(()=>{ console.error("error")} )
// .finally(()=>{ console.log("database is connected")} )
// // getting-started.js
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb+srv://heymanshigupta:AfD5GJZhfBhAqosH@namastecluster.ebvtp.mongodb.net/');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }
// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

const mongoose = require('mongoose');
async function connectDB() {
  await mongoose.connect('mongodb+srv://heymanshigupta:AfD5GJZhfBhAqosH@namastecluster.ebvtp.mongodb.net/devTinder');  
}
module.exports = connectDB;