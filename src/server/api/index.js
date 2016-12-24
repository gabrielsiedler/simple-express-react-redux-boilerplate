const express = require('express');

const router = express.Router();

router.get('/data', require('./data'));

module.exports = router;
