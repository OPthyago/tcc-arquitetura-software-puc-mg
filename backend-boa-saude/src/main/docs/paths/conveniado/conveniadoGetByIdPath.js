'use strict'

module.exports = {
	get: {
		tags: ['Conveniado'],
		summary: 'API Para retorar uma lista de conveniado',
		responses: {
			200: {
				description: 'Sucesso',
				content: {
					'application/json': {
						schema: {
							$ref: '#/schemas/conveniadoParams'
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