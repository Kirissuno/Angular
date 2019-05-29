import { Component, OnInit } from '@angular/core';
import { Direccion } from 'src/app/direccion';
import { DireccionService } from 'src/app/direccion.service';

@Component({
  selector: 'app-crear-direccion',
  templateUrl: './crear-direccion.component.html',
  styleUrls: ['./crear-direccion.component.css']
})
export class CrearDireccionComponent implements OnInit {

  direccion : Direccion = new Direccion();
  submitted = false;

  constructor(private direccionService : DireccionService) { }

  ngOnInit() {
  }

  nuevaDireccion():void{
    this.submitted = false;
    this.direccion = new Direccion();
  }

  guardar(){
    this.direccionService.crearDireccion(this.direccion)
    .subscribe(data => console.log(data), error => console.log(error));
    this.direccion = new Direccion();
  }

  onSubmit(){
    this.submitted = true;
    this.guardar();
  }
}
