'use strict'

module.exports = {
	get: {
		tags: ['Associado'],
		summary: 'API Para retorar uma lista de associado',
		responses: {
			200: {
				description: 'Sucesso',
				content: {
					'application/json': {
						schema: {
							$ref: '#/schemas/associadoParams'
						}
					}
				}
			},
			400: {
				$ref: '#components/badRequest'
			},
			401: {
				$ref: '#components/unauthorized'
			},
			500: {
				$ref: '#components/serverError'
			}
		}
	}
}