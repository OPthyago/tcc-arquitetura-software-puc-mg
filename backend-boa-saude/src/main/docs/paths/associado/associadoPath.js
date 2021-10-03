'use strict'

module.exports = {
	post: {
		tags: ['Associado'],
		summary: 'API Para cadastrar um associado',
		requestBody: {
			content: {
				'application/json': {
					schema: {
						$ref: '#/schemas/associadoParams'
					}
				}
			}
		},
		responses: {
			200: {
				description: 'Sucesso',
				content: {
					'application/json': {
						schema: {
							$ref: '#/schemas/associado'
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
	},
	put: {
		tags: ['Associado'],
		summary: 'API Para alterar um associado',
		requestBody: {
			content: {
				'application/json': {
					schema: {
						$ref: '#/schemas/associadoParams'
					}
				}
			}
		},
		responses: {
			200: {
				description: 'Sucesso',
				content: {
					'application/json': {
						schema: {
							$ref: '#/schemas/associado'
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
	},
	get: {
		tags: ['Associado'],
		summary: 'API Para retorar uma lista de associados',
		responses: {
			200: {
				description: 'Sucesso',
				content: {
					'application/json': {
						schema: {
							type: 'array',
							items: {
								$ref: '#/schemas/associadoParams'
							}
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