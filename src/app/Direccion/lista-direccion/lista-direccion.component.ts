import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Direccion } from 'src/app/direccion';
import { DireccionService } from 'src/app/direccion.service';

@Component({
  selector: 'app-lista-direccion',
  templateUrl: './lista-direccion.component.html',
  styleUrls: ['./lista-direccion.component.css']
})
export class ListaDireccionComponent implements OnInit {

  direcciones : Observable<Direccion[]>;

  constructor(private direccionService : DireccionService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.direcciones = this.direccionService.getAll();
  }

  borrarDireccion(tlfn: string){
    this.direccionService.borrarDireccion(tlfn)
    .subscribe(data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
  }

}
