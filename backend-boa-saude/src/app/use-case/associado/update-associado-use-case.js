'use strict'

const UpdateAssociadoProtocol = require("../../../domain/use-cases/associado/update-associado");

module.exports = class UpdateAssociadoUseCase extends UpdateAssociadoProtocol{

	constructor(associadoRepo) {
		super();
		this.associadoRepo = associadoRepo;
	}

	updateAssociado(associado) {
		return this.associadoRepo.put(associado);
	}
}