import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearPersonaComponent } from './Persona/crear-persona/crear-persona.component';
import { ListaPersonaComponent } from './Persona/lista-persona/lista-persona.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrearDireccionComponent } from './Direccion/crear-direccion/crear-direccion.component';
import { ListaDireccionComponent } from './Direccion/lista-direccion/lista-direccion.component';
import { SeleccionarComponent } from './Persona/seleccionar/seleccionar.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearPersonaComponent,
    ListaPersonaComponent,
    CrearDireccionComponent,
    ListaDireccionComponent,
    SeleccionarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
