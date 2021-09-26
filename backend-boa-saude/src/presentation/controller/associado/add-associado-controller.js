'use strict'

const ControllerProtocol = require("../../../domain/controller/controller-protocol");
const { serverError, ok } = require("../../utils/http-helper");

module.exports = class AddAssociadoController extends ControllerProtocol {

	constructor(associadoUseCase) {
		super();
		this.associadoUseCase = associadoUseCase;
	}

	handle(httpRequest)  {
		try {
			// TODO: implementa a chamada do metodo do caso de uso
			return ok({
				statusCode: 200,
				body: this.associadoUseCase.addAssociado(httpRequest.body)
			});
		}catch(error) {
			return serverError(error);
		}
	}

}