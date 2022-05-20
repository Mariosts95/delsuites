const path = require('path');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// import the hotels service
const { fetchHotels } = require('./services/fetchHotels');

// import the hotels db actions
const { addHotels, hotelsCounter } = require('./database/actions/hotels');

// initialize express
const app = express();

//  enable cors middleware
app.use(cors());

// connect to the database
require('./database/connection');

// use express.json to parse json data from the body (leaving it for future use)
app.use(express.json());

// use the routes
app.use('/', routes);

// path to the client
const clientPath =
  process.env.NODE_ENV === 'production' ? path.join(__dirname, '/../client/dist') : path.join(__dirname, '/../client');

app.use(express.static(clientPath)); // serve the client build folder

// root router based on environment
if (process.env.NODE_ENV === 'production') {
  // redirect all other routes to the index.html
  // TODO can't render directly the request page
  app.get('/*', (req, res) => {
    res
      .writeHead(301, {
        Location: `/`,
      })
      .end();
    res.sendFile(clientPath);
  });

  app.get('/', (req, res) => {
    res.sendFile(clientPath);
  });
} else {
  app.get('/*', (req, res) => {
    res.sendFile(clientPath);
  });
}

// check if the db has already the hotels stored
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
