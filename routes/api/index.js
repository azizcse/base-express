var express = require('express');
var router = express.Router();
let versionOne = require('./v1/index')

router.use('/v1', versionOne)

module.exports = router