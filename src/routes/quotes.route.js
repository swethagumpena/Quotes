const express = require('express');
const {
  createQuote, getQuotes, updateQuote, deleteQuoteById,
} = require('../handlers/quotes.handler');

const router = express.Router();

router.post('/', createQuote);
router.get('/', getQuotes);
router.put('/:id', updateQuote);
router.delete('/:id', deleteQuoteById);

module.exports = {
  router,
};
