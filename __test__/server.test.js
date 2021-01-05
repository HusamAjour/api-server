'use strict';

let { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe(' Server module ', () => {
  it('should get a category by id  GET /categories/:id ', async () => {
    const categoryObj = {
      name: 'test model get',
      display_name: 'testModelget',
      description: 'test test test GET',
    };
    const result = await mockRequest.post('/categories/').send(categoryObj);
    let resultBody = result.body;
    const record = await mockRequest.get(`/categories/${resultBody._id}`);
    Object.keys(categoryObj).forEach((key) => {
      expect(record.body.result[0][key]).toEqual(categoryObj[key]);
    });
    expect(result.status).toBe(200);
  });

  it('should get a product by id  GET /products/:id ', async () => {
    const productObj = {
      name: 'test model get',
      display_name: 'testModelget',
      description: 'test test test GET',
      category: '22 GET',
    };
    const result = await mockRequest.post('/products/').send(productObj);
    let resultBody = result.body;
    const record = await mockRequest.get(`/products/${resultBody._id}`);
    Object.keys(productObj).forEach((key) => {
      expect(record.body.result[0][key]).toEqual(productObj[key]);
    });
    expect(result.status).toBe(200);
  });

  it('should create a category  POST /categories ', async () => {
    const categoryObj = {
      name: 'test model post',
      display_name: 'testModelPost',
      description: 'test test test POST',
    };
    const result = await mockRequest.post('/categories/').send(categoryObj);
    Object.keys(categoryObj).forEach((key) => {
      expect(result.body[key]).toEqual(categoryObj[key]);
    });
    expect(result.status).toBe(200);
  });

  it('should create a product  POST /products ', async () => {
    const productObj = {
      name: 'test model post',
      display_name: 'testModelPost',
      description: 'test test test POST',
      category: '22 POST',
    };
    const result = await mockRequest.post('/products/').send(productObj);
    Object.keys(productObj).forEach((key) => {
      expect(result.body[key]).toEqual(productObj[key]);
    });
    expect(result.status).toBe(200);
  });
  it('should delete a category by id  DELETE /categories/:id ', async () => {
    const categoryObj = {
      name: 'test model delete',
      display_name: 'testModelDelete',
      description: 'test test test DELETE',
    };
    const result = await mockRequest.post('/categories/').send(categoryObj);
    let resultBody = result.body;
    const record = await mockRequest.delete(`/categories/${resultBody._id}`);
    console.log(record.body);
    Object.keys(categoryObj).forEach((key) => {
      expect(record.body[key]).toEqual(categoryObj[key]);
    });
    expect(result.status).toBe(200);
  });

  it('should delete a product by id DELETE /products/:id', async () => {
    const productObj = {
      name: 'test model delete',
      display_name: 'testModelDelete',
      description: 'test test test DELETE',
      category: '22 PUT',
    };
    const result = await mockRequest.post('/products/').send(productObj);
    let resultBody = result.body;
    const record = await mockRequest.delete(`/products/${resultBody._id}`);
    console.log(record.body);
    Object.keys(productObj).forEach((key) => {
      expect(record.body[key]).toEqual(productObj[key]);
    });
    expect(result.status).toBe(200);
  });
  it('should update a category by id  PUT /categories/:id ', async () => {
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
    const result = await mockRequest.post('/categories/').send(categoryObj);
    let resultBody = result.body;
    const record = await mockRequest
      .put(`/categories/${resultBody._id}`)
      .send(updateObj);
    const record2 = await mockRequest.get(`/categories/${record.body._id}`);
    Object.keys(updateObj).forEach((key) => {
      expect(record2.body.result[0][key]).toEqual(updateObj[key]);
    });
    expect(result.status).toBe(200);
  });

  it('should update a product by id PUT /products/:id', async () => {
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
    const result = await mockRequest.post('/products/').send(productObj);
    let resultBody = result.body;
    const record = await mockRequest
      .put(`/products/${resultBody._id}`)
      .send(updateObj);
    const record2 = await mockRequest.get(`/products/${record.body._id}`);
    Object.keys(updateObj).forEach((key) => {
      expect(record2.body.result[0][key]).toEqual(updateObj[key]);
    });
    expect(result.status).toBe(200);
  });
});
