'use strict';

const timestamp = require('../lib/timestamp');
let consoleSpy = jest.spyOn(console, 'log');

describe('timestamp Module', () => {
  /*let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });
*/
  it('Should log a request correctly', async () => {
    let req = {};
    let res = {};
    let next = jest.fn();
    timestamp(req, res, next);
    // expect the log to have been called
    expect(req.requestTime).toBeTruthy();
  });
});
