import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoTiempo';

  mostrarI: boolean = true;
  mostrarP: boolean = false;
  mostrarM: boolean = false;

  mostrarOcultar(){

    if(this.mostrarP == true){
      this.mostrarP = true;
      
    }else{
      this.mostrarP = true;
      this.mostrarM= false;
      this.mostrarI = false;
    }
  }

  mostrarOcultar2(){

    if(this.mostrarM == true){
      this.mostrarM = true;
      
    }else{
      this.mostrarM = true;
      this.mostrarP = false;
      this.mostrarI = false;
    }
  }

  mostrarOcultar3(){

    if(this.mostrarI == true){
      this.mostrarI = true;
      
    }else{
      this.mostrarI = true;
      this.mostrarP = false;
      this.mostrarM= false;
    }
  }

}
