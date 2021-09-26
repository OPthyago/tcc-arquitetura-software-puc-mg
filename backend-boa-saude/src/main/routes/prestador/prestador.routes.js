'use strict'

const expressRouteAdapter = require('../../adapter/express-route-adapter')
const mqAdapter = require('../../mqConsumer/mqAdapter/mqAdapter')
const prestadorGetFactory = require('../../factory/prestador/prestadorGetFactory');
const prestadorAddFactory = require('../../factory/prestador/prestadorAddFactory');
const prestadorUpdateFactory = require('../../factory/prestador/prestadorUpdateFactory');
const prestadorDeleteFactory = require('../../factory/prestador/prestadorDeleteFactory');
const prestadorPatchFactory = require('../../factory/prestador/prestadorPatchFactory');

module.exports = (router) => {
	router.get('/prestador', expressRouteAdapter(prestadorGetFactory()));
	router.post('/prestador', expressRouteAdapter(prestadorAddFactory()));
	router.put('/prestador', expressRouteAdapter(prestadorUpdateFactory()));
	router.patch('/prestador', expressRouteAdapter(prestadorPatchFactory()));
	router.delete('/prestador', expressRouteAdapter(prestadorDeleteFactory()));
}