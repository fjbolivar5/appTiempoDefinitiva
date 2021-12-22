import { RouterModule, Routes } from '@angular/router';

import { MunicipiosComponent } from './componentes/municipios/municipios.component';
import { ProvinciasComponent } from './componentes/provincias/provincias.component';

const app_routes: Routes = [
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const app_routing = RouterModule.forRoot(app_routes);