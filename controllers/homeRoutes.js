const routes=require('express').Router();
const { accessSync } = require('fs');
const path=require('path')


routes.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/login.html'))
})
routes.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/signup.html'))
})
routes.get('/',async (req,res)=>{
    res.render('homePage')
})


routes.get("/createEvent",async(req,res)=>{
    res.render('createEvent')
})

routes.get("/userPersonalPage",async(req,res)=>{
    res.render('userPersonalPage')
})

routes.get('/detail', async (req, res) => {
    res.render('eventDetail')
})

module.exports=routes;