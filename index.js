'use strict';

const server = require('./lib/server');
require('dotenv').config();
server.start(process.env.PORT);