import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

//Interfaces
import { Municipio } from '../interfaces/municipio'
import { Provincia } from '../interfaces/provincia'
import { TiempoProvincia } from '../interfaces/tiempoprovincia'
import { TiempoMunicipio } from '../interfaces/tiempomunicipio';

import { Observable } from 'rxjs';
import { AppConstants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {


  constructor(private http: HttpClient, private constanst: AppConstants) {

  }

  getProvinciasbyid(id: string): Observable<Provincia> {
    //return this.http.get<Provincia>('http://localhost:5000/provincias/' + id)
    return this.http.get<Provincia>(this.constanst.URL_PROVINCIAS + id) //Usando constantes de app.constanst.ts
  }

  getMunicipiosbyid(id: string): Observable<Municipio> {
    //return this.http.get<Municipio>('http://localhost:5000/municipios/' + id)
    return this.http.get<Municipio>(this.constanst.URL_MUNICIPIOS + id)
  }

  getTemperaturaProvincia(id: string): Observable<TiempoProvincia> {
    //return this.http.get<TiempoProvincia>('http://localhost:5000/tiempoprovincia/' + id)
    return this.http.get<TiempoProvincia>(this.constanst.URL_TIEMPOPROVINCIA + id)
  }

  getTemperaturaMunicipios(id: string): Observable<TiempoMunicipio> {
    //return this.http.get<TiempoMunicipio>('http://localhost:5000/tiempomunicipio/' + id)
    return this.http.get<TiempoMunicipio>(this.constanst.URL_TIEMPOMUNICIPIO + id)
  }

  getProvincias(): Observable<Array<String>> {
    //return this.http.get<Array<String>>('http://localhost:5000/provincias')
    return this.http.get<Array<String>>(this.constanst.URL_PROVINCIAS)
  }
  
  getMunicipios(): Observable<Array<String>> {
    //return this.http.get<Array<String>>('http://localhost:5000/municipios/')
    return this.http.get<Array<String>>(this.constanst.URL_MUNICIPIOS)
  }

  getProvinciasFecha(id: string, fecha: any): Observable<TiempoProvincia> {
    //return this.http.get<TiempoProvincia>('http://localhost:5000/tiempoprovinciaFecha/' + id + '/' + fecha)
    return this.http.get<TiempoProvincia>(this.constanst.URL_TIEMPOPROVINCIASFECHA + id + '/' + fecha)
  }

  getTemperaturaMunicipiosFecha(id: string, fecha: any): Observable<TiempoMunicipio> {
    //return this.http.get<TiempoMunicipio>('http://localhost:5000/tiempomunicipioFecha/' + id + '/' + fecha)
    return this.http.get<TiempoMunicipio>(this.constanst.URL_TIEMPOMUNICIPIOFECHA + id + '/' + fecha)
  }

}
