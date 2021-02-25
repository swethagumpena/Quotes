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

const updateQuote = async (req, res) => {
//   console.log(req.body);
  const updatedQuote = await quoteService.updateQuote(req.params.id, req.body);
  res.status(200).send(updatedQuote);
};

module.exports = {
  createQuote,
  getQuotes,
  updateQuote,
};
