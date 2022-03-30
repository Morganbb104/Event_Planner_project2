const Event = require('../models/Event');

const eventSeeds = [
  {
    location: 'Seattle',
    state: 'WA',
    category: 'concert',
    startTime: '4pm',
    endTime: '11pm',
    startDate: '04/16/2022',
    endDate: '04/16/2022',
    description: 'An awesome concert in seattle. It is going to be GREAT!',
    hostId: 7,
  },
  {
    location: 'Portland',
    state: 'OR',
    category: 'theatre',
    startTime: '3pm',
    endTime: '9pm',
    startDate: '04/20/2022',
    endDate: '04/20/2022',
    description: 'A great theater event in portland.',
    hostId: 12,
  },
  {
    location: 'Los Angeles',
    state: 'CA',
    category: 'party',
    startTime: '8pm',
    endTime: '3am',
    startDate: '04/27/2022',
    endDate: '04/28/2022',
    description: 'Huge party in LA. Lots of fun!!',
    hostId: 3,
  },
  {
    location: 'Pittsburgh',
    state: 'PA',
    category: 'foodanddrink',
    startTime: '7pm',
    endTime: '11pm',
    startDate: '05/16/2022',
    endDate: '05/16/2022',
    description: 'Dinner party! Pizza night!',
    hostId: 14,
  },
  {
    location: 'Denver',
    state: 'CO',
    category: 'career',
    startTime: '11am',
    endTime: '3pm',
    startDate: '04/09/2022',
    endDate: '04/09/2022',
    description: 'Tech job fair. Come meet potential employers and network!',
    hostId: 2,
  },
  {
    location: 'Salt Lake City',
    state: 'UT',
    category: 'concert',
    startTime: '7pm',
    endTime: '11pm',
    startDate: '04/12/2022',
    endDate: '04/12/2022',
    description:
      'Come see an awesome array of local bands perform here in the heart of SLC!',
    hostId: 6,
  },
];

const seedEvents = () => Event.bulkCreate(eventSeeds);

module.exports = seedEvents;