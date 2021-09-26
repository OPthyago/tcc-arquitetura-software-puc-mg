'use strict'

const expressRouteAdapter = require('../../adapter/express-route-adapter')
const dependenteGetFactory = require('../../factory/dependente/dependenteGetFactory');
const dependenteAddFactory = require('../../factory/dependente/dependenteAddFactory');
const dependenteUpdateFactory = require('../../factory/dependente/dependenteUpdateFactory');
const dependenteDeleteFactory = require('../../factory/dependente/dependenteDeleteFactory');

module.exports = (router) => {
	router.get('/dependente', expressRouteAdapter(dependenteGetFactory()));
	router.post('/dependente', expressRouteAdapter(dependenteAddFactory()));
	router.put('/dependente', expressRouteAdapter(dependenteUpdateFactory()));
	router.delete('/dependente', expressRouteAdapter(dependenteDeleteFactory()));

}
