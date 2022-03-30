const routes=require('express').Router();
const Userroutes=require('./api/user-routes')
routes.use(Userroutes);
module.exports=routes;