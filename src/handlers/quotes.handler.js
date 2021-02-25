const quoteService = require('../services/quotes.service');

const createQuote = async (req, res) => {
  const createdQuote = await quoteService.postQuote();
  res.status(201).send(createdQuote);
};

const getQuotes = async (req, res) => {
  let content;
  if (Object.keys(req.query).length === 0) {
    content = await quoteService.getQuote();
    return res.status(200).send(content);
  }
  content = await quoteService.getQuoteByQuery(req.query);
  //   console.log(req);
  return res.status(200).send(content);
};

const updateQuote = async (req, res) => {
  const updatedQuote = await quoteService.updateQuote(req.params.id, req.body);
  if (updatedQuote.length === 0) {
    return res.status(404).send();
  }
  res.status(200).send(updatedQuote);
};

const deleteQuoteById = async (req, res) => {
  await quoteService.deleteQuoteWithId(req.params.id);
  res.status(200).send();
};

module.exports = {
  createQuote,
  getQuotes,
  updateQuote,
  deleteQuoteById,
};
