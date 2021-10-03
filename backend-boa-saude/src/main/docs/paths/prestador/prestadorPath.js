'use strict'

module.exports = {
	post: {
		tags: ['Prestador'],
		summary: 'API Para cadastrar um prestador',
		requestBody: {
			content: {
				'application/json': {
					schema: {
						$ref: '#/schemas/prestadorParams'
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
							$ref: '#/schemas/prestador'
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
		tags: ['Prestador'],
		summary: 'API Para alterar um prestador',
		requestBody: {
			content: {
				'application/json': {
					schema: {
						$ref: '#/schemas/prestadorParams'
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
							$ref: '#/schemas/prestador'
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
		tags: ['Prestador'],
		summary: 'API Para retorar uma lista de prestador',
		responses: {
			200: {
				description: 'Sucesso',
				content: {
					'application/json': {
						schema: {
							type: 'array',
							items: {
								$ref: '#/schemas/prestadorParams'
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