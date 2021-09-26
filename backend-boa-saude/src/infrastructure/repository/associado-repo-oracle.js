'use strict'

const AssociadoRepoProtocol = require("../../domain/repository/associado-repo-protocol");

module.exports = class AssociadoRepoOracle extends AssociadoRepoProtocol {
	
	constructor(dbConnection) {
		super();
		this.dbConnection = dbConnection;
	}

	post(body){
		return 'associado cadastrado no repository';
	}

	put(body){
		return 'associado atualizado no repository';
	}

	patch(body){
		return 'associado atualizado no repository';
	}

	getAll(){
		return 'getAll associado no repository';
	}

	getById(id){
		return 'getById associado no repository';
	}
}