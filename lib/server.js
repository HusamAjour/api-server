const express = require('express');

let app = express();
const timestamp = require('./timestamp');
const logger = require('./logger');
const notFoundHandler = require('./404');
const errorHandler = require('./500');
let jsonData = require('../data /db.json');
const { json } = require('express');
require('dotenv').config;

app.use(express.json());
app.use(timestamp);
app.use(logger);

app.get('/', (req, res) => {
  res.status(200).send('server was hit successfully');
});

app.post('/products', (req, res) => {
  let newObj = req.body;
  jsonData.products.push(newObj);
  res.status(200).json(newObj);
});

app.post('/categories', (req, res) => {
  let newObj = req.body;
  jsonData.categories.push(newObj);
  res.status(200).json(newObj);
});

app.get('/products', (req, res) => {
  res.status(200).json({
    count: jsonData.products.length,
    result: jsonData.products,
  });
});

app.get('/categories', (req, res) => {
  res.status(200).json({
    count: jsonData.categories.length,
    result: jsonData.categories,
  });
});

app.get('/products/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  let productById = jsonData.products.filter((product) => {
    if (product.id == id) {
      return product;
    }
  });
  if (productById.length === 0) {
    notFoundHandler(req, res);
  } else {
    res.status(200).json({
      count: productById.length,
      result: productById,
    });
  }
});

app.get('/categories/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  let categoryById = jsonData.categories.filter((category) => {
    if (category.id == id) {
      return category;
    }
  });
  if (categoryById.length === 0) {
    notFoundHandler(req, res);
  } else {
    res.status(200).json({
      count: categoryById.length,
      result: categoryById,
    });
  }
});

app.put('/products/:id', (req, res) => {
  let modifiedObj = jsonData.products.reduce((cumm, val, index) => {
    if (val.id == req.params.id) {
      cumm = index;
    }
    return cumm;
  }, -1);

  if (modifiedObj !== -1) {
    jsonData.products[modifiedObj] = req.body;
    jsonData.products[modifiedObj].id = req.params.id;
    v;
  } else {
    res.status(404).json({});
  }
});

app.put('/categories/:id', (req, res) => {
  let modifiedObj = jsonData.categories.reduce((cumm, val, index) => {
    if (val.id == req.params.id) {
      cumm = index;
    }
    return cumm;
  }, -1);
  if (modifiedObj !== -1) {
    jsonData.categories[modifiedObj] = req.body;
    jsonData.categories[modifiedObj].id = req.params.id;
    res.status(200).json(jsonData.categories[modifiedObj]);
  } else {
    res.status(404).json({});
  }
});

app.delete('/products/:id', (req, res) => {
  let id = req.params.id;

  let deletedObj = jsonData.products.reduce((cumm, val, index) => {
    if (val.id == id) {
      cumm = index;
    }
    return cumm;
  }, 0);
  console.log(deletedObj);

  if (deletedObj === -1) {
    res.status(404).json({});
  } else {
    jsonData.products.splice(deletedObj, 1);
    res.status(200).json({});
  }
});

app.delete('/categories/:id', (req, res) => {
  let id = req.params.id;

  let deletedObj = jsonData.categories.reduce((cumm, val, index) => {
    if (val.id == id) {
      cumm = index;
    }
    return cumm;
  }, -1);
  console.log(deletedObj);

  if (deletedObj === -1) {
    res.status(404).json({});
  } else {
    jsonData.categories.splice(deletedObj, 1);
    res.status(200).json({});
  }
});

app.use('*', notFoundHandler);

app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
  },
};
