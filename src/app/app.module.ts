import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HospedeComponent } from './hospede/hospede.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import {HttpClientModule} from '@angular/common/http';
import { ToastContainerComponent } from './toast-container/toast-container.component';
import { EstadiaComponent } from './estadia/estadia.component';
import {OWL_DATE_TIME_LOCALE, OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ListagemComponent } from './listagem/listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    HospedeComponent,
    HeaderComponent,
    ToastContainerComponent,
    EstadiaComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NoopAnimationsModule
  ],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
