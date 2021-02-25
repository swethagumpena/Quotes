const axios = require('axios').default;
const { Quote } = require('../models');

const postQuote = async () => {
  const quote = await axios.get('https://api.quotable.io/quotes/-0DZUCVFcb');
  const createdQuote = await Quote.create({
    // eslint-disable-next-line max-len
    quoteId: quote.data._id, content: quote.data.content, author: quote.data.author, length: quote.data.length, tags: quote.data.tags,
  });

  return createdQuote;
};

const getQuote = async () => {
  const quotes = await Quote.findAll();
  return quotes;
};

const updateQuote = async (ID, data) => { // data is req.body
  // eslint-disable-next-line max-len
//   console.log(data);
  const updatedQuote = await Quote.update({
    content: data.content, author: data.author, length: data.length, tags: data.tags,
  },
  {
    where: {
      quoteId: ID,
    },
    returning: true,
  });
  return updatedQuote[1];
};

module.exports = {
  postQuote,
  getQuote,
  updateQuote,
};
