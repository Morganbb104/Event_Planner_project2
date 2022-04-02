const router = require('express').Router();
const { Comment, User, Event, Rsvp } = require('../../models');

// Routes for '/api/events

// get all events
router.get('/', (req, res) => {
  Event.findAll({})
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// create an event
router.post('/', (req, res) => {
  Event.create({
    location: req.body.location,
    state: req.body.state,
    category: req.body.category,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    description: req.body.description,
    hostId: req.body.hostId,// we must have hostID in request body 
  })
    .then((results) => {
      res.json({
        message: 'Event created successfully',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get specific event/ event page
router.get('/:id', (req, res) => {
  Event.findOne({
    where: {
      id: req.params.id,
    },
    // include: [
    //   { model: User, through: Rsvp, as: 'Attendees' },
    //   { model: Comment },
    // ],
  })
    .then((results) => {
      // if no results, respond with 404 and inform user no results found for that ID
      if (!results) {
        res.status(404).json({
          message: `No event found with ID ${req.params.id} found. Please try again with a different ID.`,
        });
        return;
      }
      // else respond with results
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete an event
router.delete('/:id', (req, res) => {
  Event.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((results) => {
      // if there are no results, set status to 404 and inform user that ID is not found
      if (!results) {
        res.status(404).json({
          message: `No event with Id ${req.params.id} found. Please try again with different ID.`,
        });
        return;
      }
      // else, respond with results
      res.json({ message: 'Event deleted successfully' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update an event
router.put('/:id', (req, res) => {
  Event.update(
    {
      location: req.body.location,
      state: req.body.state,
      category: req.body.category,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      description: req.body.description,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
});

module.exports = router;