// Dependencies
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const path = require("path");
require('dotenv').config();
// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
    // Tells our session to use cookies

  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Define middleware here
// app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static("public"));


// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Add routes, both API and view
app.use(routes);


// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
  

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  });