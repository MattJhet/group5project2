const router = require('express').Router();

//const userRoutes = require('./user-routes.js');
const eventRoutes = require('./event-routes.js');

//router.use('/users', userRoutes);
router.use('/event', eventRoutes);

module.exports = router;