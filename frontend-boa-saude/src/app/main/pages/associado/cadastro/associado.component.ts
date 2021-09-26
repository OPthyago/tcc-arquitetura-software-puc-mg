import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IAssociadoController } from '../../../../domain/controller/iassociado.controller';

@Component({
  selector: "app-associado",
  templateUrl: "./associado.component.html",
  styleUrls: ["./associado.component.css"],
})
export class AssociadoComponent implements OnInit {
  associadoForm: FormGroup = new FormGroup({});

  constructor(private associadoController: IAssociadoController) {
    this.createForm();
  }

  ngOnInit(): void {}

  cadastraAssociado() {
    this.associadoController.cadastraAssociado(this.associadoForm.value);
  }

  getFromForm(fieldName: string) {
    return this.associadoForm.get(fieldName);
  }

  private createForm() {
    this.associadoForm = new FormGroup({
      associadoNome: new FormControl("", Validators.required),
      cpf: new FormControl("", Validators.required),
      rg: new FormControl("", Validators.required),
      dataNascimento: new FormControl("", Validators.required),
      sexo: new FormControl("", Validators.required),
      cep: new FormControl("", Validators.required),
      endereco: new FormControl("", Validators.required),
      numero: new FormControl("", Validators.required),
      bairro: new FormControl("", Validators.required),
      cidade: new FormControl("", Validators.required),
      uf: new FormControl("", Validators.required),
      filiacaoPrimaria: new FormControl("", Validators.required),
      filiacaoSecundaria: new FormControl("", Validators.required),
      estadoCivil: new FormControl("", Validators.required),
      nomeConjugue: new FormControl("", Validators.required),
      cpfConjugue: new FormControl("", Validators.required),
      telefone: new FormControl("", Validators.required),
      telefoneSecundario: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      contatoEmergencia: new FormControl("", Validators.required),
      telefoneEmergencia: new FormControl("", Validators.required),
      dataAssociacao: new FormControl(new Date(), Validators.required),
      situacaoContrato: new FormControl(true, Validators.required),
      tipoContrato: new FormControl("", Validators.required),
      odontoAtivo: new FormControl("", Validators.required),
    });
  }
}
