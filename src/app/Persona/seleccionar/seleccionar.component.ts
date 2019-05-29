import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/persona.service';
import { Persona } from 'src/app/persona';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-seleccionar',
  templateUrl: './seleccionar.component.html',
  styleUrls: ['./seleccionar.component.css']
})
export class SeleccionarComponent implements OnInit {

  persona : Object =  new Persona;
  submitted = false;

  constructor(private route : ActivatedRoute, private dao : PersonaService, private _location: Location) { 
    
  }

  ngOnInit() {
    this.loadPersona();
  }

  async loadPersona(){
    try {
      this.persona = await this.dao.getPersona(this.route.snapshot.params.tlfn).toPromise();
    } catch (error) {
      console.log(error);
    }
  }

  guardar(){
    this.dao.actualizaPersona(this.route.snapshot.params.tlfn, this.persona)
    .subscribe();
  }

  onSubmit(){
    this.submitted = true;
    this.guardar();
    this.atras();
  }

  atras(){
    this._location.back();
  }

}
