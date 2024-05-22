const fs = require('node:fs');
fs.rename("hey.txt","hello.txt",function(err){
 if(err){
    console.log(err);
 }
 else{
    console.log("written Succesfull");
 }
})  

fs.copyFile("hello.txt","./copy/sasta.txt",function(err){
    if(err){
       console.log(err.message);
    }
    else{
       console.log("written Succesfull");
    }
   }) 

fs.unlink("hello.txt",function(err){
    if(err){
       console.log(err.message);
    }
    else{
       console.log("written Succesfull");
    }
   }) 


fs.rm("./copy",{recursive:true},function(err){
    if(err){
       console.log(err.message);
    }
    else{
       console.log("written Succesfull");
    }
   }) 

const http = require('http');
const server = http.createServer(function(req,res){
     res.end("Hello world");
})
server.listen(3000);

// routing >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const express = require('express')

const app = express()

app.use(function(req,res,next){
     console.log("Fistmiddleware");
     next();
})
app.get('/',function(req,res){
     res.send("hello worlduuuuuu")
})

app.get('/profile',function(req,res){
     res.send(" Name: Siddhartha")
})
app.get('/about/',function(req,res){
     res.send("about  page he bey")
})
app.get('/about/aboutinfo',function(req,res,next){
     return next(new Error("Some thing went wrong"));
})
app.use((err, req, res, next) => {
     console.error(err.stack)
     res.status(500).send('Something broke!')
   })

app.listen(3000)