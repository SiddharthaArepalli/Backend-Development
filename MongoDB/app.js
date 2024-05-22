const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get("/",function(req,res){
    res.send("hey")
})

app.get("/create", async function(req,res){
  let user=  await userModel.create({
    name:"Sid",
    username:"S1d",
    email:"yoy@gmail.com"
   })
    
   res.send(user);
   
})

app.get("/update", async function(req,res){
    let userUpdated =  await userModel.findOneAndUpdate({username:"S1d_d3v"},{name:"siddu"},{new:true});

      
     res.send(userUpdated);
     
  })
  app.get("/read", async function(req,res){
    let users =  await userModel.find({email:"yoy@gmail.com"});
    res.send(users);
  })


  app.get("/delete", async function(req,res){
    let users =  await userModel.findOneAndDelete({email:"yoy@gmail.com"});
    res.send(users);
  })


app.listen(3000);