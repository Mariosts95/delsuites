const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// checkout router
router.post('/checkout', async (req, res) => {
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
    res.status(400).send({ message: err.message });
  }
});

module.exports = router;
