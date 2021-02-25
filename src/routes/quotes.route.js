const express = require('express');
const { createQuote, getQuotes, updateQuote } = require('../handlers/quotes.handler');

const router = express.Router();

router.post('/', createQuote);
router.get('/', getQuotes);
router.put('/:id', updateQuote);

module.exports = {
  router,
};
