const express = require('express');
const dotenv = require('dotenv');
const { healthRouter, quotesRouter } = require('./routes');

const app = express();
dotenv.config();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/health', healthRouter);
app.use('/quotes', quotesRouter);

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
