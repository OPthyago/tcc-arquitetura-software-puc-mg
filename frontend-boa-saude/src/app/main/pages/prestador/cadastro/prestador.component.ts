import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPrestadorController } from 'src/app/domain/controller/iprestador.controller';

import { EspecialidadeEntity } from './../../../../domain/entity/especialidade.entity';


@Component({
  selector: 'app-prestador',
  templateUrl: './prestador.component.html',
  styleUrls: ['./prestador.component.css'],
})
export class PrestadorComponent implements OnInit {
  prestadorForm: FormGroup = new FormGroup({});
  listEspecialidade: EspecialidadeEntity[] = [];

  private especialidadesPrestador: EspecialidadeEntity[] = [];

  constructor(private prestadorController: IPrestadorController) {
    this.createForm();
    this.listEspecialidade = this.prestadorController.getEspecialidades();
  }

  ngOnInit(): void {}

  cadastraPrestador() {
    this.prestadorController.cadastraPrestador(this.prestadorForm.value)
    .subscribe((teste) => {
      console.log(teste)
    });
  }

  getFromForm(fieldName: string) {
    return this.prestadorForm.get(fieldName);
  }

  changed() {}

  private createForm() {
    this.prestadorForm = new FormGroup({
      nomePrestador: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      rg: new FormControl('', Validators.required),
      dataNascimento: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      uf: new FormControl('', Validators.required),
      crm: new FormControl('', Validators.required),
      situacaoContrato: new FormControl(true, Validators.required),
      dataAssociacao: new FormControl(new Date(), Validators.required),
      especialidade: new FormControl('', Validators.required),
    });
    this.setEspecialidadeValue();
  }

  private setEspecialidadeValue() {
    this.prestadorForm
      .get('especialidade')
      ?.valueChanges.subscribe((especialidades: EspecialidadeEntity[]) => {
        if (especialidades.length <= 2) {
          this.especialidadesPrestador = especialidades;
        } else {
          this.prestadorForm
            .get('especialidade')
            ?.setValue(this.especialidadesPrestador);
        }
      });
  }
}
