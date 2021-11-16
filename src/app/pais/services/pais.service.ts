import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais(terminoBusqueda: string): Observable<any> {

    const url: string = `${this.apiUrl}/name/${terminoBusqueda}`;
    return this.http.get(url);
  }

}
