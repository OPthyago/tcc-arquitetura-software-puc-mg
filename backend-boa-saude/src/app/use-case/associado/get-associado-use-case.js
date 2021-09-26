'use strict'

const GetAssociadoProtocol = require("../../../domain/use-cases/associado/get-associado");

module.exports = class GetAssociadoUseCase extends GetAssociadoProtocol{

	constructor(associadoRepo) {
		super();
		this.associadoRepo = associadoRepo;
	}

	getAssociado(associado) {
		return this.associadoRepo.getAll(associado);
	}
}