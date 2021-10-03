'use strict'

const successSchema = require('../returnSchema/successSchema')

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
		filiacaoPrimaria: {
			type: 'string'
		},
		filiacaoSecundaria: {
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
		estadoCivil: {
			type: 'string'
		},
		nomeConjugue: {
			type: 'string'
		},
		cpfConjugue: {
			type: 'string'
		},
		telefone: {
			type: 'string'
		},
		telefoneSecundario: {
			type: 'string'
		},
		email: {
			type: 'string'
		},
		contatoEmergencia: {
			type: 'string'
		},
		telefoneEmergencia: {
			type: 'string'
		},
		adataAssociacao: {
			type: 'string'
		},
		situacaoContrato: {
			type: 'boolean'
		},
		tipoContrato: {
			type: 'string'
		},
		odontoAtivo: {
			type: 'boolean'
		}
	}
)