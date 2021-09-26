'use strict'

const AddAssociadoProtocol = require("../../../domain/use-cases/associado/add-associado");

module.exports = class AddAssociadoUseCase extends AddAssociadoProtocol{

	constructor(associadoRepo) {
		super();
		this.associadoRepo = associadoRepo;
	}

	addAssociado(associado) {
		return this.associadoRepo.post(associado);
	}
}