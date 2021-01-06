'use strict';

const express = require('express');
const categories = require('../models/categories/categories.collection');
const products = require('../models/products/products.collection');
const router = express.Router();
const notFoundHandler = require('../404');

router.get('/api/:model/', handleGet);
router.get('/api/:model/:id', handleGet);
router.post('/api/:model/', handlePost);
router.delete('/api/:model/:id', handleDelete);
router.put('/api/:model/:id', handlePut);
router.param('model', getModel);

async function handleGet(req, res) {
  if (req.params.id) {
    let record = await req.model.read(req.params.id);
    if (record.length === 0) {
      notFoundHandler(req, res);
    } else {
      res.status(200).json({
        count: record.length,
        result: record,
      });
    }
  } else {
    let record = await req.model.read();
    if (record.length === 0) {
      notFoundHandler(req, res);
    } else {
      res.status(200).json({
        count: record.length,
        result: record,
      });
    }
  }
}

async function handlePost(req, res) {
  let newObj = await req.model.create(req.body);
  res.status(200).json(newObj);
}

async function handleDelete(req, res) {
  let deletedObj = await req.model.delete(req.params.id);
  if (deletedObj) {
    res.status(200).json(deletedObj);
  } else {
    notFoundHandler(req, res);
  }
}

async function handlePut(req, res) {
  let updateObj = await req.model.update(req.params.id, req.body);
  let getUpdatedObj = await req.model.read(updateObj._id);
  if (getUpdatedObj) {
    res.status(200).json(getUpdatedObj[0]);
  } else {
    notFoundHandler(req, res);
  }
}

function getModel(req, res, next) {
  if (/^categories$/i.test(req.params.model)) {
    req.model = categories;
    next();
  } else if (/^products$/i.test(req.params.model)) {
    req.model = products;
    next();
  } else {
    notFoundHandler(req, res);
  }
}

module.exports = router;
