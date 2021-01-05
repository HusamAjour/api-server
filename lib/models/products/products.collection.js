'use strict';

const products = require('./products.schema');
const Model = require('../crud-model');

class Products extends Model {
    constructor() {
        super(products);
    }
}

module.exports = new Products();