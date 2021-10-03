'use strict'

const {
	prestadorPath,
	prestadorGetByIdPath,
	associadoPath,
	associadoGetByIdPath,
	dependentePath,
	dependenteGetByIdPath
} = require('./paths');

const { 
	prestadorSchema, 
	prestadorParamsSchema, 
	associadoSchema,
	associadoParamsSchema,
	dependenteSchema,
	dependenteParamsSchema,
	errorSchema 
} = require('./schemas');

const { badRequest, serverError, unauthorized } = require('./components');

module.exports = {
	openapi: '3.0.0',
	info: {
		title: 'Api Boa Saúde',
		description: 'API Boa Saúde',
		version: '1.0.0'
	},
	servers: [
		{
			url: '/api'
		}
	],
	tags: [
		{
			name: 'Prestador'
		},
		{
			name: 'Associado'
		},
		{
			name: 'Dependente'
		}
	],
	paths: {
		'/prestador': prestadorPath,
		'/prestador/{id}': prestadorGetByIdPath,
		'/associado': associadoPath,
		'/associadoi/{id}': associadoGetByIdPath,
		'/dependente': dependentePath,
		'/dependente/{id}': dependenteGetByIdPath,
	},
	schemas: {
		error: errorSchema,
		prestador: prestadorSchema,
		prestadorParams: prestadorParamsSchema,
		associado: associadoSchema,
		associadoParams: associadoParamsSchema,
		dependente: dependenteSchema,
		dependenteParams: dependenteParamsSchema
	},
	components: {
		badRequest: badRequest,
		serverError: serverError,
		unauthorized: unauthorized,
	}
}