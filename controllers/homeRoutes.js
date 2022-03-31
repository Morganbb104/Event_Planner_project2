const routes=require('express').Router();
const { accessSync } = require('fs');
const path=require('path')
routes.get('/signin',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/login.html'))
})
routes.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/signup.html'))
})
routes.get('/home',async (req,res)=>{
    res.render('homePage')
})
routes.get('/login',async (req,res)=>{
    res.render('login')
})

routes.get("/createEvent",async(req,res)=>{
    res.render('createEvent')
})

routes.get("/userPersonalPage",async(req,res)=>{
    res.render('userPersonalPage')
})
module.exports=routes;