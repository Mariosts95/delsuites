const express = require('express');
const cors = require('cors');

// import the hotels service
const { fetchHotels } = require('./services/fetchHotels');
// import the hotels db actions
const { addHotels, getHotels, hotelsCounter } = require('./database/actions/hotels');

// initialize express
const app = express();
//  enable cors middleware
app.use(cors());

// connect to the database
require('./database/connection');

// use express.json to parse json data from the body (leaving it for future use)
app.use(express.json());

// root router
app.get('/', async (req, res, next) => {
  const hotels = await getHotels();
  return res.send(hotels);
});

// check if the db has already the hotels stored
// TODO: clean this up if possible
hotelsCounter()
  .then((count) => {
    if (!count) {
      fetchHotels()
        .then((data) => {
          addHotels(data);
        })
        .then(console.log('Database has been updated'))
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('Database is up to date');
    }
  })
  .catch((error) => {
    console.log(error);
  });

// initialize the server
app.listen(process.env.PORT || 3101, () => {
  console.log(`delsuites server is listening on port ${process.env.PORT || 3101}!`);
});
