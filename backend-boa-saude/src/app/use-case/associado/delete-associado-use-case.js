'use strict'

const DeleteAssociadoProtocol = require("../../../domain/use-cases/associado/delete-associado");

module.exports = class DeleteAssociadoUseCase extends DeleteAssociadoProtocol{

	constructor(associadoRepo) {
		super();
		this.associadoRepo = associadoRepo;
	}

	deleteAssociado(associado) {
		return this.associadoRepo.delete(associado);
	}
}