'use strict'

const { prestadorPath, prestadorGetByIdPath } = require('./paths');
const { badRequest, serverError, unauthorized } = require('./components');
const { prestadorSchema, prestadorParamsSchema, errorSchema } = require('./schemas');

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
		}
	],
	paths: {
		'/prestador': prestadorPath,
		'/prestador/{id}': prestadorGetByIdPath,
	},
	schemas: {
		error: errorSchema,
		prestador: prestadorSchema,
		prestadorParams: prestadorParamsSchema
	},
	components: {
		badRequest: badRequest,
		serverError: serverError,
		unauthorized: unauthorized,
	}
}