import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrlv2: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flags,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(terminoBusqueda: string): Observable<Country[]> {

    const url: string = `${this.apiUrlv2}/name/${terminoBusqueda}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(terminoBusqueda: string): Observable<Country[]> {
    const url: string = `${this.apiUrlv2}/capital/${terminoBusqueda}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorCodigo(id: string): Observable<Country> {
    const url: string = `${this.apiUrlv2}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url: string = `${this.apiUrlv2}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
}
