const express = require('express');
const helpers = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('hey');
  next();
});

module.exports = router;
