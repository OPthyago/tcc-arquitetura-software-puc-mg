'use strict'

const UpdatePrestadorProtocol = require("../../../domain/use-cases/prestador/update-prestador");

module.exports = class UpdatePrestadorUseCase extends UpdatePrestadorProtocol{

	constructor(prestadorRepo) {
		super();
		this.prestadorRepo = prestadorRepo;
	}

	updatePrestador(prestador, id) {
		return this.prestadorRepo.put(prestador);
	}
}