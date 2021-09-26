'use strict'

const PatchPrestadorProtocol = require("../../../domain/use-cases/prestador/patch-prestador");

module.exports = class PatchPrestadorUseCase extends PatchPrestadorProtocol{

	constructor(prestadorRepo) {
		super();
		this.prestadorRepo = prestadorRepo;
	}

	patchPrestador(prestador, id) {
		return this.prestadorRepo.patch(prestador, id);
	}
}