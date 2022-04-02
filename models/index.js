// import models
const Comment = require('./Comment');
const Event = require('./Event');
const User = require('./User');
const Rsvp = require('./RSVP');

Comment.belongsTo(User);
Comment.belongsTo(Event);
User.belongsToMany(Event, {
  through: Rsvp,
  foreignKey: 'userId',
});
Event.belongsToMany(User, {
  through: Rsvp,
  foreignKey: 'eventId',
});
Rsvp.belongsTo(User)


module.exports = {
  Comment,
  Event,
  User,
  Rsvp,
};
