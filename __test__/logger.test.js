'use strict';

const logger = require('../lib/logger');


describe('logger Module', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('Should log a request correctly', async () => {
    let req = {};
    let res = {};
    let next = jest.fn();
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
});
