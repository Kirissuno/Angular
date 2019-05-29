import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  private base = '/direccion';

  constructor(private http: HttpClient) { }

  getDireccion(dni: string): Observable<Object> {
    return this.http.get(`${this.base}/${dni}`);
  }

  crearDireccion(direccion: Object): Observable<Object> {
    return this.http.post(`${this.base}`, direccion);
  }

  actualizaDireccion(dni: string, value: any): Observable<Object> {
    return this.http.put(`${this.base}/${dni}`, value);
  }

  borrarDireccion(dni: string): Observable<any> {
    return this.http.delete(`${this.base}/${dni}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.base}`);
  }
}
