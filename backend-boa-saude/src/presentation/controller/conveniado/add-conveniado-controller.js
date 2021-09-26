'use strict'

const ControllerProtocol = require("../../../domain/controller/controller-protocol");
const { serverError, ok } = require("../../utils/http-helper");

module.exports = class AddConveniadoController extends ControllerProtocol {

	constructor(conveniadoUseCase) {
		super();
		this.conveniadoUseCase = conveniadoUseCase;
	}

	handle(httpRequest)  {
		try {
			// TODO: implementa a chamada do metodo do caso de uso
			return ok({
				statusCode: 200,
				body: this.conveniadoUseCase.addConveniado(httpRequest.body)
			});
		}catch(error) {
			return serverError(error);
		}
	}

}