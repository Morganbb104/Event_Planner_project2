const User = require('../models/User');

const userSeeds = [
  {
    username: 'Billy',
    email: 'billy@test.com',
    password: 'password1',
  },
  {
    username: 'Charlotte',
    email: 'charlotte@test.com',
    password: 'password2',
  },
  {
    username: 'Sally',
    email: 'sally@test.com',
    password: 'password3',
  },
  {
    username: 'Gina',
    email: 'gina@test.com',
    password: 'password4',
  },
  {
    username: 'Ron',
    email: 'ron@test.com',
    password: 'password5',
  },
  {
    username: 'Harry',
    email: 'harry@test.com',
    password: 'password6',
  },
  {
    username: 'Hermione',
    email: 'hermione@test.com',
    password: 'password7',
  },
  {
    username: 'Gandalf',
    email: 'gandalf@test.com',
    password: 'password8',
  },
  {
    username: 'Aragorn',
    email: 'aragorn@test.com',
    password: 'password9',
  },
  {
    username: 'Trinity',
    email: 'trinity@test.com',
    password: 'password10',
  },
  {
    username: 'Neo',
    email: 'neo@test.com',
    password: 'password11',
  },
  {
    username: 'Natasha',
    email: 'natasha@test.com',
    password: 'password12',
  },
  {
    username: 'Alexa',
    email: 'alexa@test.com',
    password: 'password13',
  },
  {
    username: 'Siri',
    email: 'siri@test.com',
    password: 'password14',
  },
  {
    username: 'Kelly',
    email: 'kelly@test.com',
    password: 'password15',
  },
  {
    username: 'Brad',
    email: 'brad@test.com',
    password: 'password16',
  },
  {
    username: 'Fox',
    email: 'fox@test.com',
    password: 'password17',
  },
  {
    username: 'Quinn',
    email: 'quinn@test.com',
    password: 'password18',
  },
  {
    username: 'Ava',
    email: 'ava@test.com',
    password: 'password19',
  },
  {
    username: 'Lilly',
    email: 'lilly@test.com',
    password: 'password20',
  },
];

const seedUsers = () => User.bulkCreate(userSeeds);

module.exports = seedUsers;
