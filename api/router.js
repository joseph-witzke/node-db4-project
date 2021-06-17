const express = require('express');
const Recipes = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Recipes.getAll()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
