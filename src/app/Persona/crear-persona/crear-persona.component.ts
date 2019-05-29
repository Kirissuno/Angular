import { Component, OnInit } from '@angular/core';
import { PersonaService } from './../../persona.service';
import { Persona } from './../../persona';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  persona : Persona = new Persona();
  submitted = false;

  constructor(private personaService : PersonaService) { }

  ngOnInit() {
  }

  nuevaPersona():void{
    this.submitted = false;
    this.persona = new Persona();
  }

  guardar(){
    this.personaService.crearPersona(this.persona)
    .subscribe(data => console.log(data), error => console.log(error));
    this.persona = new Persona();
  }

  onSubmit(){
    this.submitted = true;
    this.guardar();
  }

}
