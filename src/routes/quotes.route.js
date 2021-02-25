const express = require('express');
const { createQuote, getQuotes } = require('../handlers/quotes.handler');

const router = express.Router();

console.log('jj');
router.put('', createQuote);
router.get('', getQuotes);

module.exports = {
  router,
};
