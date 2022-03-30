const express = require('express');
const cors = require('cors');
// initialize express
const app = express();
//  enable cors middleware
app.use(cors());

// connect to the database
require('./database/connection');

// use express.json to parse json data from the body (leaving it for future use)
app.use(express.json());

app.get('/', async (req, res, next) => {
  res.send('hello world');
});

app.listen(process.env.PORT || 3101, () => {
  console.log(`delsuites server is listening on port ${process.env.PORT || 3101}!`);
});
