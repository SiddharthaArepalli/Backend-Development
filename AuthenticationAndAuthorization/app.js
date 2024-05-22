const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
app.use(cookieParser());


// // how to set cookies 
// app.get("/",function(req,res){
//      res.cookie(
//          "name", "Sid",
//      );
//      res.send("Done");
// })


// app.get("/read",function(req,res){
//     let cookie = req.cookies;
//     res.send(cookie);
// })

// app.get("/",function(req,res){
   
          
    // bcrypt.genSalt(10, function(err, salt) {
    //      console.log(hash);
    //     });
    // });


//     bcrypt.compare("hello@123","$2b$10$xaECjr5pmg7a6IdOm/cxs.GUr.IuJddsHJDwPehzMQhZDXfnbYqu2" , function(err, result) {
//         console.log(result);
//     });
// })

app.get("/" , function(req,res){
    let token = jwt.sign({email: "sidexample.com"},"secret");
    res.cookie("token",token);
   res.send("Done");
})

app.get("/read", function(req,res){
   let data = jwt.verify(req.cookies.token,"secret");
   console.log(data);
})




app.listen(3000);


