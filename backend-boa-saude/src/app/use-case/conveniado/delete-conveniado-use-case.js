'use strict'

const DeleteConveniadoProtocol = require("../../../domain/use-cases/conveniado/delete-conveniado")

module.exports = class DeleteConveniadoUseCase extends DeleteConveniadoProtocol{

	constructor(conveniadoRepo) {
		super();
		this.conveniadoRepo = conveniadoRepo;
	}

	deleteConveniado(conveniado) {
		return this.conveniadoRepo.delete(conveniado);
	}
}