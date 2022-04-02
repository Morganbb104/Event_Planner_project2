const seedEvents = require('./event_seeds');
const seedUsers = require('./user_seeds');
const seedRsvp = require('./rsvp_seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
<<<<<<< HEAD
    await sequelize.sync({force:false});
=======
    await sequelize.sync({force:true});
>>>>>>> 79eff8c ( merging)
    console.log(`DB SYNCED`);
    await seedUsers();
    console.log('USERS SEEDED');
    await seedEvents();
    console.log('EVENTS SEEDED');
    await seedRsvp();
    console.log(`RSVP SEEDED`);
    process.exit(0);
};

seedAll();