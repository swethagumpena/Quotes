const axios = require('axios').default;
const { Quote } = require('../models');

const postQuote = async () => {
  const quote = await axios.get('https://api.quotable.io/quotes/-0DZUCVFcb');
  const createdQuote = await Quote.create({
    // eslint-disable-next-line max-len
    quoteId: quote.data._id, content: quote.data.content, author: quote.data.author, length: quote.data.length, tags: quote.data.tags,
  });

  return createdQuote;
//   const createdTodo = await Todo.create({ title: message, status: stat });
//   return createdTodo;
};

module.exports = {
  postQuote,
};
