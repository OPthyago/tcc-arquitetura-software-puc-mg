'use strict'

const DeleteDependenteProtocol = require("../../../domain/use-cases/dependente/delete-dependente")

module.exports = class DeleteDependenteUseCase extends DeleteDependenteProtocol{

	constructor(dependenteRepo) {
		super();
		this.dependenteRepo = dependenteRepo;
	}

	deleteDependente(dependente) {
		return this.dependenteRepo.delete(dependente);
	}
}