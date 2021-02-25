const quoteService = require('../services/quotes.service');

const createQuote = async (req, res) => {
  console.log('here');
  const createdQuote = await quoteService.postQuote();
  res.status(201).send(createdQuote);
};

const getQuotes = async (req, res) => {
  const content = await quoteService.getQuote();
  res.status(200).send(content);
};

module.exports = {
  createQuote,
  getQuotes,
};
