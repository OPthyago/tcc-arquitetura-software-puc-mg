'use strict'

const {
	prestadorPath,
	prestadorGetByIdPath,
	associadoPath,
	associadoGetByIdPath
} = require('./paths');

const { 
	prestadorSchema, 
	prestadorParamsSchema, 
	associadoSchema,
	associadoParamsSchema,
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
		}
	],
	paths: {
		'/prestador': prestadorPath,
		'/prestador/{id}': prestadorGetByIdPath,
		'/associado': associadoPath,
		'/associadoi/{id}': associadoGetByIdPath,
	},
	schemas: {
		error: errorSchema,
		prestador: prestadorSchema,
		prestadorParams: prestadorParamsSchema,
		associado: associadoSchema,
		associadoParams: associadoParamsSchema
	},
	components: {
		badRequest: badRequest,
		serverError: serverError,
		unauthorized: unauthorized,
	}
}