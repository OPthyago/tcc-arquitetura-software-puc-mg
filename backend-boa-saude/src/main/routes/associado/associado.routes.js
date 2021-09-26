'use strict'

const expressRouteAdapter = require('../../adapter/express-route-adapter')
const associadoGetFactory = require('../../factory/associado/associadoGetFactory');
const associadoAddFactory = require('../../factory/associado/associadoAddFactory');
const associadoUpdateFactory = require('../../factory/associado/associadoUpdateFactory');
const associadoDeleteFactory = require('../../factory/associado/associadoDeleteFactory');

module.exports = (router) => {
	router.get('/associado', expressRouteAdapter(associadoGetFactory()));
	router.post('/associado', expressRouteAdapter(associadoAddFactory()));
	router.put('/associado', expressRouteAdapter(associadoUpdateFactory()));
	router.delete('/associado', expressRouteAdapter(associadoDeleteFactory()));
}
