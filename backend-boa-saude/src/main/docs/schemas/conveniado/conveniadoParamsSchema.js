'use strict'

const successSchema = require('../returnSchema/successSchema')

module.exports = successSchema(
	{
		razaoSocial: {
			type: 'string'
		},
		nomeFantasia: {
			type: 'string'
		},
		cnpj: {
			type: 'string'
		},
		inscricaoEstadual: {
			type: 'string'
		},
		dataAbertura: {
			type: 'string'
		},
		email: {
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
		acessibilidade: {
			type: 'string'
		},
		adataAssociacao: {
			type: 'string'
		},
		situacaoContrato: {
			type: 'boolean'
		}
	}
)