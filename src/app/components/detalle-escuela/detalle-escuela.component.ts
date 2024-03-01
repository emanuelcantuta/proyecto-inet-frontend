import { Component, OnInit } from '@angular/core';
import { EscuelaService } from '../../service/escuela.service';
import { ActivatedRoute } from '@angular/router';
import { Escuela } from '../../model/escuela';

@Component({
  selector: 'app-detalle-escuela',
  templateUrl: './detalle-escuela.component.html',
  styleUrls: ['./detalle-escuela.component.css']
})
export class DetalleEscuelaComponent implements OnInit{
  id:number;
  escuela:Escuela;

  constructor(private route:ActivatedRoute, private escuelaService:EscuelaService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.escuela = new Escuela;
    this.escuelaService.verDetalleDeEscuela(this.id).subscribe(dato=>{
      this.escuela = dato;
    })
  }

  
}
