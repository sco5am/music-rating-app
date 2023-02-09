const router = require('express').Router();

const songRoute = require('./songRoute');
const userRoute = require('./userRoute');

router.use('/song', songRoute);
router.use('/user', userRoute);

module.exports = router;
