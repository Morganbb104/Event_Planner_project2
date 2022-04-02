const routes=require('express').Router();
const Userroutes=require('./api/user-routes.js')
const eventRoutes = require('./api/event-routes.js')  
const commentRoutes = require('./api/comment-routes.js')
const rsvpRoutes = require('./api/rsvp-routes')

routes.use('/user', Userroutes);
routes.use('/events', eventRoutes)
routes.use('/comments', commentRoutes)
routes.use('/rsvp', rsvpRoutes)

module.exports=routes;