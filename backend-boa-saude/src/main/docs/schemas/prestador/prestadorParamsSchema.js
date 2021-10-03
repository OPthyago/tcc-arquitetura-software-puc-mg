'use strict'

const successSchema = require('../successSchema')

module.exports = successSchema(
	{
		nome: {
			type: 'string'
		},
		cpf: {
			type: 'string'
		},
		rg: {
			type: 'string'
		},
		dataNascimento: {
			type: 'string'
		},
		sexo: {
			type: 'string'
		},
		cep: {
			type: 'string'
		},
		endereco: {
			type: 'string'
		},
		numero: {
			type: 'string'
		},
		bairro: {
			type: 'string'
		},
		cidade: {
			type: 'string'
		},
		uf: {
			type: 'string'
		},
		telefone: {
			type: 'string'
		},
		telefoneSecundario: {
			type: 'string'
		},
		adataAssociacao: {
			type: 'string'
		},
		email: {
			type: 'string'
		},
		crm: {
			type: 'string'
		},
		situacaoContrato: {
			type: 'string'
		}
	}
)