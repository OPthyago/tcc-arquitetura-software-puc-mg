'use strict'

const AddPrestadorProtocol = require("../../../domain/use-cases/prestador/add-prestador")

module.exports = class AddPrestadorUseCase extends AddPrestadorProtocol{

	constructor(prestadorRepo) {
		super();
		this.prestadorRepo = prestadorRepo;
	}

	addPrestador(prestador) {
		return this.prestadorRepo.post(prestador);
	}
}