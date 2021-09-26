'use strict'

const GetDependenteProtocol = require("../../../domain/use-cases/dependente/get-dependente")

module.exports = class GetDependenteUseCase extends GetDependenteProtocol{

	constructor(dependenteRepo) {
		super();
		this.dependenteRepo = dependenteRepo;
	}

	getDependente(dependente) {
		return this.dependenteRepo.getAll(dependente);
	}
}