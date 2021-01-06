'use strict';

let { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe(' Server module ', () => {
  it('should get a category by id  GET /api/:model/:id ', async () => {
    const categoryObj = {
      name: 'test model get',
      display_name: 'testModelget',
      description: 'test test test GET',
    };
    const result = await mockRequest.post('/api/categories/').send(categoryObj);
    let resultBody = result.body;
    const record = await mockRequest.get(`/api/categories/${resultBody._id}`);
    Object.keys(categoryObj).forEach((key) => {
      expect(record.body.result[0][key]).toEqual(categoryObj[key]);
    });
    expect(result.status).toBe(200);
  });

  it('should get a product by id  GET /api/:model/:id ', async () => {
    const productObj = {
      name: 'test model get',
      display_name: 'testModelget',
      description: 'test test test GET',
      category: '22 GET',
    };
    const result = await mockRequest.post('/api/products/').send(productObj);
    let resultBody = result.body;
    const record = await mockRequest.get(`/api/products/${resultBody._id}`);
    Object.keys(productObj).forEach((key) => {
      expect(record.body.result[0][key]).toEqual(productObj[key]);
    });
    expect(result.status).toBe(200);
  });

  it('should create a category  POST /api/:model ', async () => {
    const categoryObj = {
      name: 'test model post',
      display_name: 'testModelPost',
      description: 'test test test POST',
    };
    const result = await mockRequest.post('/api/categories/').send(categoryObj);
    Object.keys(categoryObj).forEach((key) => {
      expect(result.body[key]).toEqual(categoryObj[key]);
    });
    expect(result.status).toBe(200);
  });

  it('should create a product  POST /api/:model ', async () => {
    const productObj = {
      name: 'test model post',
      display_name: 'testModelPost',
      description: 'test test test POST',
      category: '22 POST',
    };
    const result = await mockRequest.post('/api/products/').send(productObj);
    Object.keys(productObj).forEach((key) => {
      expect(result.body[key]).toEqual(productObj[key]);
    });
    expect(result.status).toBe(200);
  });
  it('should delete a category by id  DELETE /api/:model/:id ', async () => {
    const categoryObj = {
      name: 'test model delete',
      display_name: 'testModelDelete',
      description: 'test test test DELETE',
    };
    const result = await mockRequest.post('/api/categories/').send(categoryObj);
    let resultBody = result.body;
    const record = await mockRequest.delete(
      `/api/categories/${resultBody._id}`
    );
    Object.keys(categoryObj).forEach((key) => {
      expect(record.body[key]).toEqual(categoryObj[key]);
    });
    expect(result.status).toBe(200);
  });

  it('should delete a product by id DELETE /api/:model/:id', async () => {
    const productObj = {
      name: 'test model delete',
      display_name: 'testModelDelete',
      description: 'test test test DELETE',
      category: '22 PUT',
    };
    const result = await mockRequest.post('/api/products/').send(productObj);
    let resultBody = result.body;
    const record = await mockRequest.delete(`/api/products/${resultBody._id}`);
    Object.keys(productObj).forEach((key) => {
      expect(record.body[key]).toEqual(productObj[key]);
    });
    expect(result.status).toBe(200);
  });
  it('should update a category by id  PUT /api/:model/:id ', async () => {
    const categoryObj = {
      name: 'test model put',
      display_name: 'testModelPut',
      description: 'test test test PUT',
    };
    const updateObj = {
      name: 'test model put3',
      display_name: 'testModelPut3',
      description: 'test test test PUT3',
    };
    const result = await mockRequest.post('/api/categories/').send(categoryObj);
    let resultBody = result.body;
    const record = await mockRequest
      .put(`/api/categories/${resultBody._id}`)
      .send(updateObj);
    Object.keys(updateObj).forEach((key) => {
      expect(record.body[key]).toEqual(updateObj[key]);
    });
    expect(result.status).toBe(200);
  });

  it('should update a product by id PUT /api/:model/:id', async () => {
    const productObj = {
      name: 'test model put',
      display_name: 'testModelPut',
      description: 'test test test PUT',
      category: '22 PUT',
    };
    const updateObj = {
      name: 'test model put2',
      display_name: 'testModelPut2',
      description: 'test test test PUT2',
      category: '22 PUT2',
    };
    const result = await mockRequest.post('/api/products/').send(productObj);
    let resultBody = result.body;
    const record = await mockRequest
      .put(`/api/products/${resultBody._id}`)
      .send(updateObj);
    Object.keys(updateObj).forEach((key) => {
      expect(record.body[key]).toEqual(updateObj[key]);
    });
    expect(result.status).toBe(200);
  });
});
