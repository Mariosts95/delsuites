const router = require('express').Router();

const { getHotels, findHotel } = require('../../database/actions/hotels');

// get hotels
router.get('/hotels', async (req, res) => {
  const { from, size } = await req.query; // get the parameters from query

  try {
    const hotels = await getHotels(from, size); // get hotels from db paginated
    if (!hotels.length) throw { status: 400, statusMessage: 'Error on receiving the hotels' }; // if there are no hotels throw an error

    return res.status(200).send(hotels);
  } catch (error) {
    return res.status(400).send(error);
  }
});

// get specific hotel
router.get('/hotel/:id', async (req, res) => {
  const { id } = req.params; // get the parameters from query

  try {
    const hotel = await findHotel(id); // get specific hotel from db
    if (!hotel) throw { status: 400, statusMessage: 'Error on receiving the hotels' }; // if there is no hotel throw an error

    return res.status(200).send(hotel);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
