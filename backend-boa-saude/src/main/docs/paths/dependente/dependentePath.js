'use strict'

module.exports = {
	post: {
		tags: ['Dependente'],
		summary: 'API Para cadastrar um dependente',
		requestBody: {
			content: {
				'application/json': {
					schema: {
						$ref: '#/schemas/dependenteParams'
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
							$ref: '#/schemas/dependente'
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
		tags: ['Dependente'],
		summary: 'API Para alterar um dependente',
		requestBody: {
			content: {
				'application/json': {
					schema: {
						$ref: '#/schemas/dependenteParams'
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
							$ref: '#/schemas/dependente'
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
		tags: ['Dependente'],
		summary: 'API Para retorar uma lista de dependentes',
		responses: {
			200: {
				description: 'Sucesso',
				content: {
					'application/json': {
						schema: {
							type: 'array',
							items: {
								$ref: '#/schemas/dependenteParams'
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