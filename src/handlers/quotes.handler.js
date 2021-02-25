const quoteService = require('../services/quotes.service');

const createQuote = async (req, res) => {
  console.log('here');
  const createdQuote = await quoteService.postQuote();
  res.status(201).send(createdQuote);
};

module.exports = {
  createQuote,
};
