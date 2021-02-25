const { router: healthRouter } = require('./health.route');
const { router: quotesRouter } = require('./quotes.route');

module.exports = {
  healthRouter,
  quotesRouter,
};
