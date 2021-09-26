export interface AssociadoEntity {
  nome: string;
  cpf: string;
  rg: string;
  dataNascimento: string;
  sexo: string;
  filiacaoPrimaria: string;
  filiacaoSecundaria: string;
  cep: string;
  endereco: string;
  numero: number;
  bairro: string;
  cidade: string;
  uf: string;
  estadoCivil: string;
  nomeConjugue?: string;
  cpfConjugue?: string;
  telefone: string;
  telefoneSecundario?: string;
  email: string;
  contatoEmergencia: string;
  telefoneEmergencia: string;
  dataAssociacao: Date;
  situacaoContrato: boolean;
  tipoContrato: string;
  odontoAtivo: boolean;
}
