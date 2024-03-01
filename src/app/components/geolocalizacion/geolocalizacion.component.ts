import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/service/places.service';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.component.html',
  styleUrls: ['./geolocalizacion.component.css']
})
export class GeolocalizacionComponent implements OnInit{
  campo:String = "no";

  private placeService: PlacesService;

  constructor(){}

  ngOnInit(): void {   
    
  }

  activarGeo(): void{
    if(this.campo == "si") {
      this.placeService;
    }
  }

}
