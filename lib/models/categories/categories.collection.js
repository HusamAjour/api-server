'use strict';

const categories = require('./categories.schema');
const Model = require('../crud-model');

class Categories extends Model {
    constructor() {
        super(categories);
    }
}

module.exports = new Categories();