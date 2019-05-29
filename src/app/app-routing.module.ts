import { CrearPersonaComponent } from './Persona/crear-persona/crear-persona.component';
import { CrearDireccionComponent } from './Direccion/crear-direccion/crear-direccion.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPersonaComponent } from './Persona/lista-persona/lista-persona.component';
import { ListaDireccionComponent } from './Direccion/lista-direccion/lista-direccion.component';
import { SeleccionarComponent } from './Persona/seleccionar/seleccionar.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'persona', component: ListaPersonaComponent },
  { path: 'npersona', component: CrearPersonaComponent },
  { path: 'direccion', component: ListaDireccionComponent },
  { path: 'ndireccion', component: CrearDireccionComponent },
  { path: 'seleccionado/:tlfn', component: SeleccionarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
