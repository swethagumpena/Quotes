const express = require('express');
const { createQuote } = require('../handlers/quotes.handler');

const router = express.Router();

console.log('jj');
router.post('', createQuote);

module.exports = {
  router,
};
