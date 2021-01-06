'use strict';

require('@code-fellows/supergoose');

const categories = require('../lib/models/categories/categories.collection');

describe('Categories Model', () => {
  it('it can create()', async () => {
    const categoryObj = {
      name: 'test model post',
      display_name: 'testModelPost',
      description: 'test test test POST',
    };
    const result = await categories.create(categoryObj);
    Object.keys(categoryObj).forEach((key) => {
      expect(result[key]).toEqual(categoryObj[key]);
    });
  });

  it('it can read()', async () => {
    const categoryObj = {
      name: 'test model post',
      display_name: 'testModelPost',
      description: 'test test test POST',
    };
    const result = await categories.create(categoryObj);
    const record = await categories.read(result._id); // give me back the result obj in an array
    Object.keys(categoryObj).forEach((key) => {
      expect(record[0][key]).toEqual(categoryObj[key]);
    });
  });

  it('it can delete()', async () => {
    const categoryObj = {
      name: 'test model post',
      display_name: 'testModelPost',
      description: 'test test test POST',
    };
    const result = await categories.create(categoryObj);
    const record = await categories.delete(result._id); // give me back the result obj in an array
    Object.keys(categoryObj).forEach((key) => {
      expect(record[key]).toEqual(categoryObj[key]);
    });
  });

  it('it can update()', async () => {
    const categoryObj = {
      name: 'test model post',
      display_name: 'testModelPost',
      description: 'test test test POST',
    };

    const updateObj = {
      name: 'test model put',
      display_name: 'testModelPut',
      description: 'test test test PUT',
    };
    const result = await categories.create(categoryObj);
    const record = await categories.update(result._id, updateObj);
    const record2 = await categories.read(record._id);
    Object.keys(updateObj).forEach((key) => {
      expect(record2[0][key]).toEqual(updateObj[key]);
    });
  });
});
