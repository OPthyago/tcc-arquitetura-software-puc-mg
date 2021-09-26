'use strict'

const { Router } = require('express');
const fg = require('fast-glob')

module.exports = (app) => {
	const router = Router();
	app.use('/api', router);
	fg.sync('**/src/main/routes/**/**routes.js').map(async file => {
		const route = (await require(`../../../${file}`))
		route(router)
	})
}