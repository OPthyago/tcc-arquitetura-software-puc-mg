'use strict'

const GetPrestadorProtocol = require("../../../domain/use-cases/prestador/get-prestador");

module.exports = class GetPrestadorUseCase extends GetPrestadorProtocol{

	constructor(prestadorRepo) {
		super();
		this.prestadorRepo = prestadorRepo;
	}

	getPrestador(prestador, id) {
		if(id) return this.prestadorRepo.getById(id);
		else return this.prestadorRepo.getAll(prestador);
	}
}