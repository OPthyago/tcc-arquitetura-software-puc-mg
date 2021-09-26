'use strict'

const ControllerProtocol = require("../../../domain/controller/controller-protocol");
const { serverError, ok } = require("../../utils/http-helper");

module.exports = class AddDependenteController extends ControllerProtocol {

	constructor(dependenteUseCase) {
		super();
		this.dependenteUseCase = dependenteUseCase;
	}

	handle(httpRequest)  {
		try {
			// TODO: implementa a chamada do metodo do caso de uso
			return ok({
				statusCode: 200,
				body: this.dependenteUseCase.addDependente(httpRequest.body)
			});
		}catch(error) {
			return serverError(error);
		}
	}

}