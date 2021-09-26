'use strict'

const UpdateConveniadoProtocol = require("../../../domain/use-cases/conveniado/update-conveniado")

module.exports = class UpdateConveniadoUseCase extends UpdateConveniadoProtocol{

	constructor(conveniadoRepo) {
		super();
		this.conveniadoRepo = conveniadoRepo;
	}

	updateConveniado(conveniado) {
		return this.conveniadoRepo.put(conveniado);
	}
}