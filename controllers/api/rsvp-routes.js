const router = require('express').Router();
const { Rsvp, User } = require('../../models');

// Routes for '/api/events

// get all users attend events
// router.get('/', (req, res) => {
//   Rsvp.findAll({})
//     .then((results) => {
//       res.json(results);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
router.get('/:id',async(req,res)=>{
  const a=await Rsvp.findAll({where:{eventId:req.params.id},include:[{model:User}],attributes:{exclude:['email','id','password']}});
  res.json(a)

})

module.exports = router;
