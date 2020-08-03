import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs/operators';
import {Observable} from 'rxjs';

const API = 'http://localhost:3000/hospedes';

@Injectable({
  providedIn: 'root'
})
export class HospedeService {

  constructor(private http: HttpClient) { }

  list(): Observable<object[]> {
    return this.http.get<object[]>(API);
  }

  create(hospede: object): any {
    return this.http.post(API, hospede).pipe(take(1));
  }
}
