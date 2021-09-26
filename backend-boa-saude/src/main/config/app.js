const express = require('express')
const setupMiddlewares  = require('./middlewares');
const setupRoutes = require('./routes');
const activeMq  = require('../mqConsumer/activeMq');
const Stomp = require("stomp-client");
const stompClient = new Stomp("127.0.0.1", 61613);
const app = express()
app.use(express.json())

setupMiddlewares(app);
setupRoutes(app);
activeMq(app);

module.exports = app