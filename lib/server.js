const express = require('express');
const app = express();
const cors = require('cors');
const api = require('./routes/api');
const morgan = require('morgan');
const notFoundHandler = require('./404');
const errorHandler = require('./500');
require('dotenv').config;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.get('/', (req, res) => {
  res.status(200).send('server was hit successfully');
});

app.use(api);

app.use('*', notFoundHandler);

app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
  },
};
