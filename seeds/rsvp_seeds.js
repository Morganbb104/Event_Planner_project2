const Rsvp = require('../models/RSVP');

const rsvpSeeds = [
  {
    userId: 6,
    eventId: 2,
    attended: true,
  },
  {
    userId: 6,
    eventId: 5,
    attended: true,
  },
  {
    userId: 17,
    eventId: 1,
    attended: true,
  },
  {
    userId: 18,
    eventId: 3,
    attended: true,
  },
  {
    userId: 19,
    eventId: 1,
    attended: true,
  },
  {
    userId: 14,
    eventId: 5,
    attended: true,
  },
  {
    userId: 9,
    eventId: 6,
    attended: true,
  },
  {
    userId: 10,
    eventId: 1,
    attended: true,
  },
  {
    userId: 11,
    eventId: 2,
    attended: true,
  },
  {
    userId: 12,
    eventId: 3,
    attended: true,
  },
  {
    userId: 7,
    eventId: 4,
    attended: true,
  },
  {
    userId: 8,
    eventId: 5,
    attended: true,
  },
];

const seedRsvp = () => Rsvp.bulkCreate(rsvpSeeds);

module.exports = seedRsvp;
