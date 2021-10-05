const express = require('express')
const setupMiddlewares  = require('./middlewares');
const setupRoutes = require('./routes');
const activeMq  = require('../mqConsumer/activeMq');
const setupSwagger = require('./swagger')
const app = express()
app.use(express.json())

setupSwagger(app);
setupMiddlewares(app);
setupRoutes(app);
// activeMq(app);

module.exports = app