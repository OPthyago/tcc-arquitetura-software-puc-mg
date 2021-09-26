'use strict'

const GetConveniadoProtocol = require("../../../domain/use-cases/conveniado/get-conveniado")

module.exports = class GetConveniadoUseCase extends GetConveniadoProtocol{

	constructor(conveniadoRepo) {
		super();
		this.conveniadoRepo = conveniadoRepo;
	}

	getConveniado(conveniado) {
		return this.conveniadoRepo.getAll(conveniado);
	}
}