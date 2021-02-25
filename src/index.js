const express = require('express');
const dotenv = require('dotenv');
const { healthRouter } = require('./routes');

const app = express();
dotenv.config();
const port = process.env.PORT || 8080;

app.use('/health', healthRouter);

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
