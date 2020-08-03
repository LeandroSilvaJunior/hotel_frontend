import {IHosdepe} from './IHospede.model';

export interface IEstadia {
  id: number;
  hospede_id: number;
  dataEntrada: string;
  dataSaida: string;
  adicionalVeiculo: boolean;
  valor: number;
}
