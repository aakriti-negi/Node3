// Create an API call // /user
// Use a middleware
// Check whether the user_id 
// if query parameter is greater than 10000
// >10000 success
// else error

// const express = require('express')
// const app = express()

// const middle = function(req,res,next){
//     if(req.query.user_id >10000){next()}
//     else{res.send("Error")}
// }

// app.use(middle);

// app.get('/home',function(req,res){
//     console.log(req.query.user_id)
//     res.send("Success");
// })

// app.listen(3003);


const express = require('express')
const app = express();

//creating first middleware
const middleware1 = function(req,res,next){ 
    console.log('middleWare 1 ');
    next();
}

app.use(middleware1); // can be used globally

//creating second middleware
const middleware2 = function(req,res,next){
    console.log('middleware 2');
}

//creating routes

//using middleware2 and global middleware
app.get('/',middleware2,function(req,res){
    res.send("Home page")
})

//using middleware1 => global
app.get('/first',function(req,res){
    res.send("First Page")
})

//using middleware2 and global middleware
app.get('/second',middleware2,function(req,res){
    res.send("Second Page")
})

//using middleware1 => global
app.get('/third',function(req,res){
    res.send("Third Page")
})

app.listen(3002);