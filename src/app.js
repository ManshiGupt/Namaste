const express = require("express");
const app= express();
const port= 7777;


// app.get('/',(req,res)=>{
//     console.log("Hello there");
// })


// app.use('/test',(req,res)=>{
//     console.log(req.query());
//     res.send("this is test")
// })
app.use('/et',(req, res)=>{
    res.send("bd");
})

app.get("/",( req,res)=>{
        res.send("dbhcd");
})
app.post("/",(req,res)=>{
    res.send("This is post respone!");
})

app.patch("/",(req,res)=>{
    res.send("This is post response!");
})
app.put("/",(req,res)=>{
    res.send("This is post response!");
})




app.listen(port,()=>{
    console.log("Example app listening on port 7777");
})


// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, Wrld!\n');

// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
