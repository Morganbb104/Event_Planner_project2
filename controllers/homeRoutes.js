const routes=require('express').Router();
const {Event,Rsvp,User,Comment}=require('../models')
const path=require('path');
const router = require('./api/user-routes');
const db=require('../config/connection');
const { type } = require('express/lib/response');
const { sequelize } = require('../models/Comment');
routes.get('/signin',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/login.html'))
})
routes.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/signup.html'))
})
routes.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/homePage.html'))
})


router.post('/eventfilter',async(req,res)=>{
try{
        const categoryBody=req.body.event_category.toLowerCase();
    console.log(categoryBody)

const QueryData=`select * from Event where category="${categoryBody}" AND state="${req.body.state}";`;
const result= await db.query(QueryData,{type:db.QueryTypes.SELECT});

if(result==false){
    console.log('user selection not found')

    res.json({message:"Not Found here!!Please try again"})
}else{
    console.log(result);
    // RendeData will be send it dynamically through handlebars




}



}catch(err){
    res.json(err)
}

})




module.exports=routes;


