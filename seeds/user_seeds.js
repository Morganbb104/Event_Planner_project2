const User = require('../models/User');

const userSeeds = [
  {
    username: 'Billy',
    email: 'billly@test.com',
    password: 'password1',
  },
  {
    username: 'Charlotte',
    email: 'charlottie@test.com',
    password: 'password2',
  },
  {
    username: 'Sally',
    email: 'sallly@test.com',
    password: 'password3',
  },
  {
    username: 'Gina',
    email: 'gina8@test.com',
    password: 'password4',
  },
  {
    username: 'Ron',
    email: 'ronn@test.com',
    password: 'password5',
  },
  {
    username: 'Harry',
    email: 'harruy@test.com',
    password: 'password6',
  },
  {
    username: 'Hermione',
    email: 'hermiione@test.com',
    password: 'password7',
  },
  {
    username: 'Gandalf',
    email: 'gandhalf@test.com',
    password: 'password8',
  },
  {
    username: 'Aragorn',
    email: 'aralgorn@test.com',
    password: 'password9',
  },
  {
    username: 'Trinity',
    email: 'sally71@test.com',
    password: 'password10',
  },
  {
    username: 'Neo',
    email: 'neop@test.com',
    password: 'password11',
  },
  {
    username: 'Natasha',
    email: 'natasha7@test.com',
    password: 'password12',
  },
  {
    username: 'Alexa',
    email: 'alexa9@test.com',
    password: 'password13',
  },
  {
    username: 'Siri',
    email: 'siri9@test.com',
    password: 'password14',
  },
  {
    username: 'Kelly',
    email: 'kell8y@test.com',
    password: 'password15',
  },
  {
    username: 'Brad',
    email: 'brad6@test.com',
    password: 'password16',
  },
  {
    username: 'Fox',
    email: 'fox9@test.com',
    password: 'password17',
  },
  {
    username: 'Quinn',
    email: 'quinn8@test.com',
    password: 'password18',
  },
  {
    username: 'Ava',
    email: 'ava8@test.com',
    password: 'password19',
  },
  {
    username: 'Lilly',
    email: 'lilly9@test.com',
    password: 'password20',
  },
];

const seedUsers = () => User.bulkCreate(userSeeds);

module.exports = seedUsers;
