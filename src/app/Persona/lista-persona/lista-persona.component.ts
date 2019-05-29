import { Observable } from "rxjs";
import { PersonaService } from "./../../persona.service";
import { Persona } from "./../../persona";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.css']
})
export class ListaPersonaComponent implements OnInit {

  personas : Observable<Persona[]>;

  constructor(private personaservice: PersonaService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.personas = this.personaservice.getAll();
  }

  borrarPersona(tlfn: string){
    this.personaservice.borrarPersona(tlfn)
    .subscribe(data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
  }

  sacarPersona(tlfn: string){
    this.personaservice.getPersona(tlfn)
    .subscribe(data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
  }

}
