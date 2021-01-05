'use strict';

const express = require('express');
let jsonData = require('../data /db.json');
const notFoundHandler = require('../lib/404');
const errorHandler = require('../lib/500');
const categories = require('../lib/models/categories/categories.collection');
const router = express.Router();

router.get('/categories', getCategoriesHandler);

router.get('/categories/:id', getCategoriesHandler);

router.post('/categories', postCategoryHandler);

router.put('/categories/:id', putCategoryHandler);

router.delete('/categories/:id', deleteCategoryHandler);

async function getCategoriesHandler(req, res) {
  if (req.params.id) {
    let record = await categories.read(req.params.id);

    if (record.length === 0) {
      notFoundHandler(req, res);
    } else {
      res.status(200).json({
        count: record.length,
        result: record,
      });
    }
  } else {
    let record = await categories.read();
    res.status(200).json({
      count: record.length,
      result: record,
    });
  }
}
async function postCategoryHandler(req, res) {
  let newObj = await categories.create(req.body);
  res.status(200).json(newObj);
}
async function putCategoryHandler(req, res) {
  let updateObj = await categories.update(req.params.id, req.body);

  if (updateObj) {
    res.status(200).json(updateObj);
  } else {
    notFoundHandler(req, res);
  }
}
async function deleteCategoryHandler(req, res) {
  let deletedObj = await categories.delete(req.params.id);
  if (deletedObj) {
    res.status(200).json(deletedObj);
  } else {
    notFoundHandler(req, res);
  }
}

module.exports = router;
