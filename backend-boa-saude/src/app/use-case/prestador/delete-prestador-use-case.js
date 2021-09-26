'use strict'

const DeletePrestadorProtocol = require("../../../domain/use-cases/prestador/delete-prestador");

module.exports = class DeletePrestadorUseCase extends DeletePrestadorProtocol{

	constructor(prestadorRepo) {
		super();
		this.prestadorRepo = prestadorRepo;
	}

	deletePrestador(id) {
		return this.prestadorRepo.delete(id);
	}
}