const path = require('path');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const clientPath = path.join(__dirname, '/../client/dist');

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

// root router
app.get('/', async (req, res) => {
  res.sendFile(clientPath);
});

// checkout router
app.post('/api/checkout', async (req, res) => {
  const { reservationInfo } = await req.body; // get the reservation info from the body

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: reservationInfo.map((item) => {
        return {
          price_data: {
            currency: item.currency,
            product_data: {
              name: item.name,
              images: [item.image],
            },
            unit_amount: item.price * 100, // convert from cents
          },
          quantity: item.quantity,
        };
      }),
      success_url: `https://giphy.com/gifs/westworldhbo-hbo-westworld-3o7TKqrIABvf6C224M/fullscreen`, // TODO: change this to the real url when I fix the deployment paths
      cancel_url: `https://giphy.com/gifs/confused-travolta-poor-wallet-3o6UB5RrlQuMfZp82Y/fullscreen`, // TODO: change this to the real url when I fix the deployment paths
    });

    res.json({ url: session.url });
  } catch (err) {
    res.send({ status: 'fail', message: err.message });
  }
});

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
app.use(express.static(clientPath)).listen(process.env.PORT || 3101, () => {
  console.log(`delsuites server is listening on port ${process.env.PORT || 3101}!`);
});
