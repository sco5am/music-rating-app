const router = require('express').router();

const apiRoutes = require('./api');

router.use('/', apiRoutes);

module.exports = router;
