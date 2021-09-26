'use strict'

const UpdateDependenteProtocol = require("../../../domain/use-cases/dependente/update-dependente")

module.exports = class UpdateDependenteUseCase extends UpdateDependenteProtocol{

	constructor(dependenteRepo) {
		super();
		this.dependenteRepo = dependenteRepo;
	}

	updateDependente(dependente) {
		return this.dependenteRepo.put(dependente);
	}
}