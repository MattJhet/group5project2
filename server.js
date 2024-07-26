
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const hbs = exphbs.create({});

const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

const sess = {

  secret: "Super secret secret",
  cookie: {
    maxAge: 60 * 60 * 1000, // 1 hour
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),

};

app.use(session(sess));



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));


app.use(routes);

sequelize.sync({ force: false }).then(() => {

  app.listen(PORT, () => {
    console.log("Server is listening");
  });
});


// Bob do something
// How bad could this possibly be? - Daniel

