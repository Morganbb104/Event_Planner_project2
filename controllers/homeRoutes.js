const routes=require('express').Router();
const path=require('path')
routes.get('/signin',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/login.html'))
})
routes.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/signup.html'))
})
module.exports=routes;