'use strict'

const PrestadorRepoProtocol = require("../../domain/repository/prestador-repo-protocol")
let prestadorData = require('../db/mocks/prestadorMock.json');
const path = require('path');
let especialidadePrestadorData = require('../db/mocks/especialidade_prestador.json');
const mockPath = path.join(__dirname, '../db/mocks/prestadorMock.json');
const fs = require("fs");

module.exports = class PrestadorRepoOracle extends PrestadorRepoProtocol {
	
	constructor(dbConnection) {
		super();
		this.dbConnection = dbConnection;
	}

	post(body){
		// prestadorData.push(body);
		// fs.writeFileSync(mockPath,JSON.stringify(prestadorData),'utf-8');
	}

	put(body, id){
		console.log("PUT vindo do body: " + body)
		return 'prestador atualizado no repository';
	}

	patch(body, id){
		const prestadorIndex = prestadorData.map(function(item) { return item.id_prestador }).indexOf(id);
		for(let i=0; i < body.length; i++){
			console.log(prestadorData[prestadorIndex].body[i]);
		}
		fs.writeFileSync(mockPath,JSON.stringify(prestadorData),'utf-8');
		return prestadorData;
		// return 'prestador atualizado no repository';
	}

	getAll(){
		return prestadorData;
	}

	getById(id){
		return prestadorData.filter(function (prestador) {
			return prestador.id_prestador === id;
		});
	}

	delete(body){
		const prestadorIndex = prestadorData.map(function(item) { return item.id_prestador }).indexOf(body);
		prestadorData.splice(prestadorIndex, 1);
		fs.writeFileSync(mockPath,JSON.stringify(prestadorData),'utf-8');
		return prestadorData;
	}

}