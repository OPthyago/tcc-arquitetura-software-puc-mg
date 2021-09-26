import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EspecialidadeEntity } from 'src/app/domain/entity/especialidade.entity';

import { IPrestadorController } from '../../domain/controller/iprestador.controller';
import { PrestadorEntity } from '../../domain/entity/prestador.entity';
import { IPrestadorUseCase } from '../../domain/useCases/iprestador-use-case';


@Injectable({
  providedIn: 'root'
})
export class PrestadorController implements IPrestadorController {

  private especialidadesPrestador: EspecialidadeEntity[] = [];

	constructor (private prestadorUseCase: IPrestadorUseCase) {
	}

  getEspecialidades(): EspecialidadeEntity[] {
    return [
      {
        descricao: 'ACUPUNTURA',
        codigo: '5594'
      },
      {
        descricao: 'ALERGIA E IMUNOLOGIA',
        codigo: '1'
      },
      {
        descricao: 'ALERGIA E IMUNOLOGIA PEDIATRICA',
        codigo: '20047'
      },
      {
        descricao: 'ANESTESIOLOGIA',
        codigo: '3'
      },
      {
        descricao: 'ANGIOLOGIA E CIRURGIA VASCULAR',
        codigo: '4'
      },
      {
        descricao: 'ANGIORRADIOLOGIA E CIRURGIA ENDOVASCULAR',
        codigo: '20048'
      },
      {
        descricao: 'CARDIOLOGIA',
        codigo: '6'
      },
      {
        descricao: 'CARDIOLOGIA PEDIATRICA',
        codigo: '62'
      },
      {
        descricao: 'CIRURGIA BARIATRICA',
        codigo: '31483'
      },
      {
        descricao: 'CIRURGIA CARDIOVASCULAR',
        codigo: '43'
      },
      {
        descricao: 'CIRURGIA CRANIO-MAXILO-FACIAL',
        codigo: '20056'
      },
      {
        descricao: 'CIRURGIA DA MAO',
        codigo: '56'
      },
      {
        descricao: 'CIRURGIA DE CABECA E PESCOCO',
        codigo: '59'
      },
      {
        descricao: 'CIRURGIA GERAL',
        codigo: '7'
      },
      {
        descricao: 'CIRURGIA PEDIATRICA',
        codigo: '41'
      },
      {
        descricao: 'CIRURGIA PLASTICA',
        codigo: '8'
      },
      {
        descricao: 'CIRURGIA TORACICA',
        codigo: '44'
      },
      {
        descricao: 'CIRURGIA VIDEOLAPAROSCOPICA',
        codigo: '70'
      },
      {
        descricao: 'CLINICA MEDICA',
        codigo: '5'
      },
      {
        descricao: 'COLOPROCTOLOGIA',
        codigo: '50'
      },
      {
        descricao: 'DENSITOMETRIA OSSEA',
        codigo: '5412'
      },
      {
        descricao: 'DERMATOLOGIA',
        codigo: '9'
      },
      {
        descricao: 'DOR',
        codigo: '82'
      },
      {
        descricao: 'ECOCARDIOGRAFIA',
        codigo: '20051'
      },
      {
        descricao: 'ECOGRAFIA VASCULAR COM DOPPLER',
        codigo: '20049'
      },
      {
        descricao: 'ELETROFISIOLOGIA CLINICA INVASIVA',
        codigo: '93'
      },
      {
        descricao: 'ELETRONEUROMIOGRAFIA',
        codigo: '84'
      },
      {
        descricao: 'ENDOCRINOLOGIA E METABOLOGIA',
        codigo: '10'
      },
      {
        descricao: 'ENDOCRINOLOGIA PEDIATRICA',
        codigo: '20064'
      },
      {
        descricao: 'ENDOSCOPIA',
        codigo: '42'
      },
      {
        descricao: 'ENDOSCOPIA DIGESTIVA',
        codigo: '20057'
      },
      {
        descricao: 'ENDOSCOPIA GINECOLOGICA',
        codigo: '20066'
      },
      {
        descricao: 'ERGOMETRIA',
        codigo: '20053'
      },
      {
        descricao: 'FISIATRIA',
        codigo: '47'
      },
      {
        descricao: 'GASTROENTEROLOGIA',
        codigo: '48'
      },
      {
        descricao: 'GASTROENTEROLOGIA PEDIATRICA',
        codigo: '20065'
      },
      {
        descricao: 'GENETICA MEDICA',
        codigo: '5410'
      },
      {
        descricao: 'GERIATRIA',
        codigo: '40'
      },
      {
        descricao: 'GINECOLOGIA E OBSTETRICIA',
        codigo: '11'
      },
      {
        descricao: 'HEMATOLOGIA E HEMOTERAPIA',
        codigo: '12'
      },
      {
        descricao: 'HEMATOLOGIA E HEMOTERAPIA PEDIATRICA',
        codigo: '20071'
      },
      {
        descricao: 'HEMODINAMICA E CARDIOLOGIA INTERVENCIONISTA',
        codigo: '88'
      },
      {
        descricao: 'HEPATOLOGIA',
        codigo: '53'
      },
      {
        descricao: 'HOMEOPATIA',
        codigo: '58'
      },
      {
        descricao: 'INFECTOLOGIA',
        codigo: '46'
      },
      {
        descricao: 'INFECTOLOGIA PEDIATRICA',
        codigo: '20074'
      },
      {
        descricao: 'MAMOGRAFIA',
        codigo: '92'
      },
      {
        descricao: 'MASTOLOGIA',
        codigo: '55'
      },
      {
        descricao: 'MEDICINA DE FAMILIA E COMUNIDADE',
        codigo: '20092'
      },
      {
        descricao: 'MEDICINA DO ADOLESCENTE',
        codigo: '20078'
      },
      {
        descricao: 'MEDICINA FETAL',
        codigo: '20067'
      },
      {
        descricao: 'MEDICINA INTENSIVA',
        codigo: '5576'
      },
      {
        descricao: 'MEDICINA INTENSIVA PEDIATRICA',
        codigo: '5723'
      },
      {
        descricao: 'MEDICINA NUCLEAR',
        codigo: '49'
      },
      {
        descricao: 'NEFROLOGIA',
        codigo: '14'
      },
      {
        descricao: 'NEFROLOGIA PEDIATRICA',
        codigo: '20079'
      },
      {
        descricao: 'NEONATOLOGIA',
        codigo: '5415'
      },
      {
        descricao: 'NEUROCIRURGIA',
        codigo: '57'
      },
      {
        descricao: 'NEUROFISIOLOGIA CLINICA',
        codigo: '60'
      },
      {
        descricao: 'NEUROFISIOLOGIA CLINICA',
        codigo: '20087'
      },
      {
        descricao: 'NEUROLOGIA',
        codigo: '15'
      },
      {
        descricao: 'NEUROLOGIA PEDIATRICA',
        codigo: '61'
      },
      {
        descricao: 'NEURORRADIOLOGIA',
        codigo: '20080'
      },
      {
        descricao: 'NUTRICAO PARENTERAL E ENTERAL',
        codigo: '81'
      },
      {
        descricao: 'NUTRICAO PARENTERAL E ENTERAL PEDIATRICA',
        codigo: '20055'
      },
      {
        descricao: 'NUTROLOGIA',
        codigo: '20097'
      },
      {
        descricao: 'NUTROLOGIA PEDIATRICA',
        codigo: '20081'
      },
      {
        descricao: 'OFTALMOLOGIA',
        codigo: '20'
      },
      {
        descricao: 'ORTOPEDIA E TRAUMATOLOGIA',
        codigo: '16'
      },
      {
        descricao: 'OTORRINOLARINGOLOGIA',
        codigo: '17'
      },
      {
        descricao: 'PATOLOGIA',
        codigo: '2'
      },
      {
        descricao: 'PATOLOGIA CLINICA/MEDICINA LABORATORIAL',
        codigo: '18'
      },
      {
        descricao: 'PEDIATRIA',
        codigo: '19'
      },
      {
        descricao: 'PNEUMOLOGIA',
        codigo: '21'
      },
      {
        descricao: 'PNEUMOLOGIA PEDIATRICA',
        codigo: '63'
      },
      {
        descricao: 'PSIQUIATRIA',
        codigo: '22'
      },
      {
        descricao: 'PSIQUIATRIA DA INFANCIA E ADOLESCENCIA',
        codigo: '20084'
      },
      {
        descricao: 'PSIQUIATRIA FORENSE',
        codigo: '20085'
      },
      {
        descricao: 'RADIOLOGIA E DIAGNOSTICO POR IMAGEM',
        codigo: '23'
      },
      {
        descricao: 'RADIOLOGIA INTERVENCIONISTA E ANGIORRADIOLOGIA',
        codigo: '20050'
      },
      {
        descricao: 'RADIOTERAPIA',
        codigo: '51'
      },
      {
        descricao: 'REUMATOLOGIA',
        codigo: '52'
      },
      {
        descricao: 'REUMATOLOGIA PEDIATRICA',
        codigo: '20086'
      },
      {
        descricao: 'SEXOLOGIA',
        codigo: '20069'
      },
      {
        descricao: 'TOXICOLOGIA MEDICA',
        codigo: '31495'
      },
      {
        descricao: 'ULTRASSONOGRAFIA EM GINECOLOGIA E OBSTETRICIA',
        codigo: '20070'
      },
      {
        descricao: 'ULTRASSONOGRAFIA GERAL',
        codigo: '91'
      },
      {
        descricao: 'UROLOGIA',
        codigo: '27'
      }
    ]
  }

	cadastraPrestador(prestador: PrestadorEntity): Observable<number> {
		return this.prestadorUseCase.cadastraPrestador(prestador);
	}
}
