let express = require('express');
let router = express.Router();

let userRoute = require('./user.route')


router.use('/users', userRoute)


module.exports = router