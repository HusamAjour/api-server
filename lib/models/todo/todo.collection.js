'use strict';

const todo = require('./todo.schema');
const Model = require('../crud-model');

class Todo extends Model {
    constructor() {
        super(todo);
    }
}

module.exports = new Todo();