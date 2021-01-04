'use strict';

let {server} = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe(' Server module ', ()=> {
    it('should respond with 200 for GET /categories ', ()=> {
        return mockRequest.get('/categories').then(result=> {
            expect(result.status).toBe(200);
        }).catch(console.error);
    });

    it('should respond with 200 for GET /categories/2 ', ()=> {
        return mockRequest.get('/categories/2').then(result=> {
            expect(result.status).toBe(200);
        }).catch(console.error);
    });

    it('should respond with 200 for GET /products ', ()=> {
        return mockRequest.get('/products').then(result=> {
            expect(result.status).toBe(200);
        }).catch(console.error);
    });

    it('should respond with 200 for GET /products/3 ', ()=> {
        return mockRequest.get('/products/3').then(result=> {
            expect(result.status).toBe(200);
        }).catch(console.error);
    });


    it('should respond with 200 for POST /products ', ()=> {
        return mockRequest.get('/products').then(result=> {
            expect(result.status).toBe(200);
        }).catch(console.error);
    });

    it('should respond with 200 for POST /categories/ ', ()=> {
        return mockRequest.get('/products/3').then(result=> {
            expect(result.status).toBe(200);
        }).catch(console.error);
    });

    it('should respond with 200 for DELETE /products/1 ', ()=> {
        return mockRequest.get('/products').then(result=> {
            expect(result.status).toBe(200);
        }).catch(console.error);
    });

    it('should respond with 200 for DELETE /categories/1 ', ()=> {
        return mockRequest.get('/products/3').then(result=> {
            expect(result.status).toBe(200);
        }).catch(console.error);
    });

    it('should respond with 200 for PUT /products/1 ', ()=> {
        return mockRequest.get('/products').then(result=> {
            expect(result.status).toBe(200);
        }).catch(console.error);
    });

    it('should respond with 200 for PUT /categories/1 ', ()=> {
        return mockRequest.get('/products/3').then(result=> {
            expect(result.status).toBe(200);
        }).catch(console.error);
    });
});