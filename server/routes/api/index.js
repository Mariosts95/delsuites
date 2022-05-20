const router = require('express').Router();

const HotelsAPI = require('./hotels');
const CheckoutAPI = require('./checkout');

router.use('/', HotelsAPI);
router.use('/', CheckoutAPI);

module.exports = router;
