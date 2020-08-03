import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HospedeService} from '../hospede.service';

import {ToastService} from '../toast.service';
import {EstadiaService} from '../estadia.service';

@Component({
  selector: 'app-estadia',
  templateUrl: './estadia.component.html',
  styleUrls: ['./estadia.component.sass']
})
export class EstadiaComponent implements OnInit {

  formulario: FormGroup;
  hospedes: object[];

  constructor(
    private formBuilder: FormBuilder,
    private hospedeService: HospedeService,
    private estadiaService: EstadiaService,
    private toastService: ToastService) { }

  get _dataEntrada(): any { return this.formulario.get('dataEntrada'); }
  get _dataSaida(): any { return this.formulario.get('dataSaida'); }
  get _hospede(): any { return this.formulario.get('hospede'); }
  get _possuiVeiculo(): any { return this.formulario.get('possuiVeiculo'); }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      dataEntrada: [null, Validators.required],
      dataSaida: [null, Validators.required],
      hospede: [null, Validators.required],
      possuiVeiculo: [false]
    });

    this.searchHospedes();
  }

  getErrorClass(field: string): any {
    return {
      'is-invalid' : this.isInvalidAndTouched(field)
    };
  }

  isInvalidAndTouched(field: string): boolean {
    return (
      this.formulario.get(field).invalid &&
      (this.formulario.get(field).touched || this.formulario.get(field).dirty)
    );
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      const estadia = {
        dataEntrada: new Date(this._dataEntrada.value).toISOString(),
        dataSaida: new Date(this._dataSaida.value).toISOString(),
        hospede_id: this._hospede.value,
        possuiVeiculo: this._possuiVeiculo.value,
        valor: this.calcularEstadia()
      };

      this.estadiaService.create(estadia).subscribe(
        success => this.showSuccess(),
        error => this.showError()
      );
      this.formulario.reset();
    }
  }

  showSuccess(): void {
    this.toastService.show('Check in cadastrada com sucesso!', { classname: 'bg-success text-light', delay: 10000 });
  }

  showError(): void {
    this.toastService.show('Erro ao cadastrar o check in!', { classname: 'bg-danger text-light', delay: 10000 });
  }

  searchHospedes(): any {
    this.hospedeService.list().subscribe(data => this.hospedes = data);
  }

  private calcularEstadia(): number {
    const dataEntrada = new Date(this._dataEntrada.value);
    const dataSaida = new Date(this._dataSaida.value);
    const possuiVeiculo = this._possuiVeiculo.value;

    let valorTotal = 0;
    for (let date = new Date(dataEntrada); date <= dataSaida; date.setDate(date.getDate() + 1)) {
      valorTotal = valorTotal + this.getValorDiaria(date.getDay());

      if (possuiVeiculo) {
        valorTotal = valorTotal + this.getValorAdicionalVeiculo(date.getDay());
      }
    }

    if (dataSaida.getHours() >= 16 && dataSaida.getMinutes() >= 30) {
      valorTotal = valorTotal + this.getValorDiaria(dataSaida.getDay());
    }

    return valorTotal;
  }

  private getValorDiaria(dayOfWeek: number): number {
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return 150;
    } else {
      return 120;
    }
  }

  private getValorAdicionalVeiculo(dayOfWeek: number): number {
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return 20;
    } else {
      return 15;
    }
  }
}
