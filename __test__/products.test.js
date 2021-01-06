'use strict';

require('@code-fellows/supergoose');

const products = require('../lib/models/products/products.collection');

describe('Products Model', () => {
  it('it can create()', async () => {
    const productObj = {
      name: 'test model post',
      display_name: 'testModelPost',
      description: 'test test test POST',
      category: '22 POST',
    };
    const result = await products.create(productObj);
    Object.keys(productObj).forEach((key) => {
      expect(result[key]).toEqual(productObj[key]);
    });
  });

  it('it can read()', async () => {
    const productObj = {
      name: 'test model post',
      display_name: 'testModelPost',
      description: 'test test test POST',
      category: '22 POST',
    };
    const result = await products.create(productObj);
    const record = await products.read(result._id); // give me back the result obj in an array
    Object.keys(productObj).forEach((key) => {
      expect(record[0][key]).toEqual(productObj[key]);
    });
  });

  it('it can delete()', async () => {
    const productObj = {
      name: 'test model post',
      display_name: 'testModelPost',
      description: 'test test test POST',
      category: '22 POST',
    };
    const result = await products.create(productObj);
    const record = await products.delete(result._id); // give me back the result obj in an array
    Object.keys(productObj).forEach((key) => {
      expect(record[key]).toEqual(productObj[key]);
    });
  });

  it('it can update()', async () => {
    const productObj = {
      name: 'test model post',
      display_name: 'testModelPost',
      description: 'test test test POST',
      category: '22 POST',
    };

    const updateObj = {
      name: 'test model put',
      display_name: 'testModelPut',
      description: 'test test test PUT',
      category: '22 PUT',
    };
    const result = await products.create(productObj);
    const record = await products.update(result._id, updateObj);
    const record2 = await products.read(record._id);
    Object.keys(updateObj).forEach((key) => {
      expect(record2[0][key]).toEqual(updateObj[key]);
    });
  });
});
