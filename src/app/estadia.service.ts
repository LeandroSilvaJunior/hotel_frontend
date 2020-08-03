import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

const API = 'http://localhost:3000/estadias';

@Injectable({
  providedIn: 'root'
})
export class EstadiaService {

  constructor(private http: HttpClient) { }

  list(): Observable<object[]> {
    return this.http.get<object[]>(API);
  }

  create(estadia: object): any {
    return this.http.post(API, estadia).pipe(take(1));
  }
}
