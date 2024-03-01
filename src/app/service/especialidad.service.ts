import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Especialidad } from '../model/especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  private baseUrlDetalle = "http://localhost:8080/inet/v1/infoEspecialidad";

  constructor(private httpClient : HttpClient) { }

  verDetalleDeEspecialidad(id:number){
    this.httpClient.get<Especialidad>(`${this.baseUrlDetalle}/${id}`)
  }

}
