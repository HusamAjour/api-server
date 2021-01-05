'use strict';

const express = require('express');
let jsonData = require('../data /db.json');
const notFoundHandler = require('../lib/404');
const errorHandler = require('../lib/500');
const products = require('../lib/models/products/products.collection');

const router = express.Router();

router.get('/products', getProductsHandler);

router.get('/products/:id', getProductsHandler);

router.post('/products', postProductHandler);

router.put('/products/:id', putProductHandler);

router.delete('/products/:id', deleteProductHandler);

async function getProductsHandler(req, res) {
  if (req.params.id) {
    let record = await products.read(req.params.id);

    if (record.length === 0) {
      notFoundHandler(req, res);
    } else {
      res.status(200).json({
        count: record.length,
        result: record,
      });
    }
  } else {
    let record = await products.read();
    res.status(200).json({
      count: record.length,
      result: record,
    });
  }
}

async function postProductHandler(req, res) {
  let newObj = await products.create(req.body);
  res.status(200).json(newObj);
}

async function putProductHandler(req, res) {
  let updateObj = await products.update(req.params.id, req.body);
  if (updateObj) {
    res.status(200).json(updateObj);
  } else {
    notFoundHandler(req, res);
  }
}

async function deleteProductHandler(req, res) {
  let deletedObj = await products.delete(req.params.id);
  if (deletedObj) {
    res.status(200).json(deletedObj);
  } else {
    notFoundHandler(req, res);
  }
}
module.exports = router;
