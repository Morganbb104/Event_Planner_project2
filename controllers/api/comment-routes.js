const router = require('express').Router();
const { Comment, User, Event } = require('../../models');

// Routes for '/api/comments'

// get all comments for an event
router.get('/:eventId', (req, res) => {
  Comment.findAll({})
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post a comment
router.post('/:eventId', (req, res) => {
  Comment.create({
    comment: req.body.comment,
    user_id: req.body.user_id,
    event_id: req.params.eventId,
  })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a comment
router.delete('/:id', (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((results) => {
      // if there are no results, set status to 404 and inform user that ID is not found
      if (!results) {
        res.status(404).json({
          message: `No comment with Id ${req.params.id} found. Please try again with different ID.`,
        });
        return;
      }
      // else, respond with results
      res.json({ message: 'Comment deleted successfully' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a comment
router.put('/:id', (req, res) => {
  Comment.update(
    {
      comment: req.body.comment,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
});
