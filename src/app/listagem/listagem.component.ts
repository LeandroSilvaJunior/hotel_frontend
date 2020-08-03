import { Component, OnInit } from '@angular/core';
import {HospedeService} from '../hospede.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.sass']
})
export class ListagemComponent implements OnInit {
  hospedes: object[];

  constructor(private hospedeService: HospedeService) { }

  ngOnInit(): void {
    this.searchHospedes();
  }

  searchHospedes(): any {
    this.hospedeService.list().subscribe(data => this.hospedes = data);
  }

}
