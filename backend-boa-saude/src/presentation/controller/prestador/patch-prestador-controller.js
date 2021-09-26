'use strict'

const ControllerProtocol = require("../../../domain/controller/controller-protocol");
const { serverError, ok } = require("../../utils/http-helper");

module.exports = class PatchPrestadorController extends ControllerProtocol {

	constructor(prestadorUseCase) {
		super();
		this.prestadorUseCase = prestadorUseCase;
	}

	handle(httpRequest, )  {
		try {
			// TODO: implementa a chamada do metodo do caso de uso
			return ok({
				statusCode: 200,
				body: this.prestadorUseCase.patchPrestador(httpRequest.body, Number(httpRequest.query.id))
			});
		}catch(error) {
			return serverError(error);
		}
	}

}