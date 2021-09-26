'use strict'

const AddConveniadoProtocol = require("../../../domain/use-cases/conveniado/add-conveniado")

module.exports = class AddConveniadoUseCase extends AddConveniadoProtocol{

	constructor(conveniadoRepo) {
		super();
		this.conveniadoRepo = conveniadoRepo;
	}

	addConveniado(conveniado) {
		return this.conveniadoRepo.post(conveniado);
	}
}