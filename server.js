const path = require('path');
const express = require('express');
const session=require('express-session');


const exphbs = require('express-handlebars');
const routes = require('./controllers');
const SequelizeStore=require('connect-session-sequelize')(session.Store)
const Homeroutes = require('./controllers/homeRoutes');
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;
// session setup
const sess={
    secret:"wow!!if i will let you know,so that will be not a secret anymore",
    cookie:{
maxAge:86400
    },
    resave:false,
    saveUninitialized: true,
    store:new SequelizeStore({
        db:sequelize
    })

};

app.use(session(sess))

// handlebars setup
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(Homeroutes);
app.use(routes)




sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
