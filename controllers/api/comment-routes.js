const router = require('express').Router();

// Routes for '/api/comments'

// get all comments for an event
router.get('/:eventId', (req, res) => {});

// post a comment
router.post('/:eventId', (req, res) => {});

// delete a comment
router.delete('/:eventId/:commentId', (req, res) => {});

// update a comment
router.put('/:eventId/:commentId', (req, res) => {});
