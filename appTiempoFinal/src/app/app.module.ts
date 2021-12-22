import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
//Rutas
import { app_routing } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepuestaSQLComponent } from './repuesta-sql/repuesta-sql.component';
import { ProvinciasComponent } from './componentes/provincias/provincias.component';
import { MunicipiosComponent } from './componentes/municipios/municipios.component';

@NgModule({
  declarations: [
    AppComponent,
    RepuestaSQLComponent,
    ProvinciasComponent,
    MunicipiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    app_routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
