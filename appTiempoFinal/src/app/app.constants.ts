import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConstants {
    public PUERTO = "5000"
    public URL_PROVINCIAS = "http://localhost:" + this.PUERTO + "/provincias/";
    public URL_MUNICIPIOS = "http://localhost:" + this.PUERTO + "/municipios/";
    public URL_TIEMPOPROVINCIA = "http://localhost:" + this.PUERTO + "/tiempoprovincia/";
    public URL_TIEMPOMUNICIPIO = "http://localhost:" + this.PUERTO + "/tiempomunicipio/";
    public URL_TIEMPOPROVINCIASFECHA = "http://localhost:" + this.PUERTO + "/tiempoprovinciaFecha/";
    public URL_TIEMPOMUNICIPIOFECHA = "http://localhost:" + this.PUERTO + "/tiempomunicipioFecha/";
}