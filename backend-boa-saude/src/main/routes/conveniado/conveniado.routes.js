'use strict'

const expressRouteAdapter = require('../../adapter/express-route-adapter')
const conveniadoGetFactory = require('../../factory/conveniado/conveniadoGetFactory');
const conveniadoAddFactory = require('../../factory/conveniado/conveniadoAddFactory');
const conveniadoUpdateFactory = require('../../factory/conveniado/conveniadoUpdateFactory');
const conveniadoDeleteFactory = require('../../factory/conveniado/conveniadoDeleteFactory');

module.exports = (router) => {
	router.get('/conveniado', expressRouteAdapter(conveniadoGetFactory()));
	router.post('/conveniado', expressRouteAdapter(conveniadoAddFactory()));
	router.put('/conveniado', expressRouteAdapter(conveniadoUpdateFactory()));
	router.delete('/conveniado', expressRouteAdapter(conveniadoDeleteFactory()));
}