'use strict'

const {
	prestadorPath,
	prestadorGetByIdPath,
	associadoPath,
	associadoGetByIdPath,
	dependentePath,
	dependenteGetByIdPath,
	conveniadoPath,
	conveniadoGetByIdPath
} = require('./paths');

const { 
	prestadorSchema, 
	prestadorParamsSchema, 
	associadoSchema,
	associadoParamsSchema,
	dependenteSchema,
	dependenteParamsSchema,
	conveniadoSchema,
	conveniadoParamsSchema,
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
		},
		{
			name: 'Conveniado'
		}
	],
	paths: {
		'/prestador': prestadorPath,
		'/prestador/{id}': prestadorGetByIdPath,
		'/associado': associadoPath,
		'/associadoi/{id}': associadoGetByIdPath,
		'/dependente': dependentePath,
		'/dependente/{id}': dependenteGetByIdPath,
		'/conveniado': conveniadoPath,
		'/conveniado/{id}': conveniadoGetByIdPath
	},
	schemas: {
		error: errorSchema,
		prestador: prestadorSchema,
		prestadorParams: prestadorParamsSchema,
		associado: associadoSchema,
		associadoParams: associadoParamsSchema,
		dependente: dependenteSchema,
		dependenteParams: dependenteParamsSchema,
		conveniado: conveniadoSchema,
		conveniadoParams: conveniadoParamsSchema
	},
	components: {
		badRequest: badRequest,
		serverError: serverError,
		unauthorized: unauthorized,
	}
}