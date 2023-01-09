let express = require('express');
let router = express.Router();

const UserController = require('../../../controllers/user.controller')

router
    .route('/')
    .get(UserController.getUsers)
    .post(UserController.register);



module.exports = router