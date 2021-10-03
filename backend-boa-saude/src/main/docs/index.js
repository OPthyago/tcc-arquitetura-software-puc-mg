'use strict'

const prestadorPath = require('./paths/prestador/prestadorPath');
const prestadorGetByIdPath = require('./paths/prestador/prestadorGetByIdPath');
const badRequest = require('./components/badRequest');
const serverError = require('./components/serverError');
const unauthorized = require('./components/unauthorized');
const prestadorSchema = require('./schemas/prestador/prestadorSchema');
const prestadorParamsSchema = require('./schemas/prestador/prestadorParamsSchema');
const errorSchema = require('./schemas/errorSchema');

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