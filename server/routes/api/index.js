const router = require('express').Router();

const HotelsAPI = require('./hotels');

router.use('/', HotelsAPI);

module.exports = router;
