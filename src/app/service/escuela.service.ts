import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escuela } from '../model/escuela';
import { Especialidad } from '../model/especialidad';


@Injectable({
  providedIn: 'root'
})
export class EscuelaService {
  private baseUrlDetalle : String = "http://localhost:8080/inet/v1/infoEscuela";

  constructor(private httpClient : HttpClient) { }

  verDetalleDeEscuela(id:number):Observable<Escuela> {
    return this.httpClient.get<Escuela>(`${this.baseUrlDetalle}/${id}`);
  }
}
