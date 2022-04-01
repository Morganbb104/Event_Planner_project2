const router = require('express').Router();
const { Rsvp } = require('../../models');

// Routes for '/api/events

// get all events
router.get('/', (req, res) => {
  Rsvp.findAll({})
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
