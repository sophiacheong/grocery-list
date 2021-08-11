const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router
  .route('/')
  .get(controllers.get)
  .post(controllers.post)

module.exports = router;