'use strict'

const { serve, setup } = require('swagger-ui-express')
const { noCache } = require('../middlewares')
const swaggerConfig = require('../docs')

module.exports = (app) => {
	app.use('/api-docs', noCache, serve, setup(swaggerConfig));
}