import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HospedeService} from '../hospede.service';
import {ToastService} from '../toast.service';

@Component({
  selector: 'app-hospede',
  templateUrl: './hospede.component.html',
  styleUrls: ['./hospede.component.sass']
})
export class HospedeComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private hospedeService: HospedeService,
    private toastService: ToastService) { }

  get _nome(): any { return this.formulario.get('nome'); }
  get _numeroDocumento(): any { return this.formulario.get('numeroDocumento'); }
  get _numeroTelefone(): any { return this.formulario.get('numeroTelefone'); }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      numeroDocumento: [null, Validators.required],
      numeroTelefone: [null, Validators.required]
    });
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
      .result.then(r => this.formulario.reset(), r => this.formulario.reset());
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
      const hospede = {
        nome: this._nome.value,
        numeroDocumento: this._numeroDocumento.value,
        numeroTelefone:  this._numeroTelefone.value,
      };

      this.hospedeService.create(hospede).subscribe(
        success => this.showSuccess(),
        error => this.showError()
      );
      this.formulario.reset();
      this.modalService.dismissAll();
    }
  }

  showSuccess(): void {
    this.toastService.show('Pessoa cadastrada com sucesso!', { classname: 'bg-success text-light', delay: 10000 });
  }

  showError(): void {
    this.toastService.show('Erro ao cadastrar pessoa!', { classname: 'bg-danger text-light', delay: 10000 });
  }

}
