const router = require('express').Router();

const songRoute = require('./songRoute');

router.use('/song', songRoute);

module.exports = router;
