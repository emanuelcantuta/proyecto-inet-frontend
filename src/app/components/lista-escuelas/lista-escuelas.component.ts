import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Escuela } from 'src/app/model/escuela';
import { EscuelaService } from 'src/app/service/escuela.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-escuelas',
  templateUrl: './lista-escuelas.component.html',
  styleUrls: ['./lista-escuelas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaEscuelasComponent implements OnInit{
  private baseUrlListar : String = "http://localhost:8080/inet/v1/escuelas";
  p:number = 1;
  campo:String = "";

  constructor(private escuelaService : EscuelaService, private router:Router, private http : HttpClient){}

  handleSearch(value : string){  
    this.filtro_valor.next(value);
    console.log(value);
  }
  
  filtro_valor = new BehaviorSubject<string>('');

  ngOnInit(): void {
    this.http.get<Escuela[]>(`${this.baseUrlListar}`).subscribe(
      (school : any[]) => this.escuelita.next(school));
  }

  escuelita = new BehaviorSubject<any[]>([]);

  //falta
  private obtenerEspecialidades(){

  }

  verDetalleEscuela(id:number){
    this.router.navigate(["escuela-detalle", id])
  }

}