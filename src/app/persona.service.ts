import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private base = '/persona';

  constructor(private http: HttpClient) { }

  getPersona(tlfn: string): Observable<Object> {
    return this.http.get(`${this.base}/${tlfn}`);
  }

  crearPersona(persona: Object): Observable<Object> {
    return this.http.post(`${this.base}`, persona);
  }

  actualizaPersona(tlfn:string, value:any): Observable<Object> {
    return this.http.put(`${this.base}/${tlfn}`, value);
  }

  borrarPersona(tlfn: string): Observable<any> {
    return this.http.delete(`${this.base}/${tlfn}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.base}`);
  }
}
