import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiserviceService } from '../../services/apiservice.service'
import { Municipio } from '../../interfaces/municipio';
import { TiempoMunicipio } from '../../interfaces/tiempomunicipio';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.css']
})
export class MunicipiosComponent implements OnInit {

  myControl = new FormControl();
  idMunicipio: string = ''
  municipios: Array<String> = []
  fecha?:any = null

  municipio: Municipio = {
    codmuni: '',
    codprov: '',
    nombre: ''
  }

  tiempoM: TiempoMunicipio = {
    codmuni: '',
    fecha: '',
    maxima: '',
    minima: '',
    lluvia: ''
  }

  constructor( public apiservice: ApiserviceService) { }

  ngOnInit(): void {

    this.apiservice.getMunicipios().subscribe(resp => {
      this.municipios = resp
    })
  }

  buscarMunicipio(): void {
    if (this.idMunicipio != '' && this.fecha != null) {
      //Quito la info de la anterior consulta
      this.municipio.nombre=''
      this.tiempoM.codmuni=''
      this.tiempoM.fecha=''
      this.tiempoM.lluvia=''
      this.tiempoM.maxima=''
      this.tiempoM.minima=''
      
      this.apiservice.getTemperaturaMunicipiosFecha(this.idMunicipio,this.fecha).subscribe(resp => {
        this.tiempoM = resp
      })

      this.apiservice.getMunicipiosbyid(this.idMunicipio).subscribe(resp => {
        this.municipio = resp
      })
      this.idMunicipio=''
      this.fecha=null
    }
  }
}
