'use strict'

const { contentType } = require ('../middlewares')

module.exports = (app) => {
	app.use(contentType);
}