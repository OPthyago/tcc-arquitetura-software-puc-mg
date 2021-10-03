'use strict'

const { serve, setup } = require ('swagger-ui-express')
const swaggerConfig = require('../docs')

module.exports = (app) => {
	app.use('/api-docs', serve, setup(swaggerConfig));
}