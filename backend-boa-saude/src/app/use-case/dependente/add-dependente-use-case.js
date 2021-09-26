'use strict'

const AddDependenteProtocol = require("../../../domain/use-cases/dependente/add-dependente")

module.exports = class AddDependenteUseCase extends AddDependenteProtocol{

	constructor(dependenteRepo) {
		super();
		this.dependenteRepo = dependenteRepo;
	}

	addDependente(dependente) {
		return this.dependenteRepo.post(dependente);
	}
}