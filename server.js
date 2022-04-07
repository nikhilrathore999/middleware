console.log("Hello World");
const { request, response } = require('express');
//create server
const express = require('express');
const server=express();
const middleware= (request,response,next)=>{
    console.log("hello middleware 1");
    next(); // block the flow and take it back to the requested route
}
const middleware2= (request,response,next)=>{
    console.log("hello middleware 2");
    next(); 
}
server.use(middleware);
server.use(middleware2);
server.get("/",(request,response)=>{
    response.send("hello world")
})
server.get("/user", middleware2,(request,response)=>{
    response.send("hello user")
})
server.listen(3000,()=> {
    console.log("server is running on port 3000")
});
//http method
//get-get data
//post-send data
//put/update
//

//middleware
//middleware is a function that runs before the route
//take three parameters req, res, next
// middleware is used to do some preprocessing before the route
//can create multiple middleware