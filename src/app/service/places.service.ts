import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number , number] ;
  get isUserLocationReady():boolean{
    return !!this.useLocation
  }

  constructor() { 
    this.getUserLocation();
  }

  getUserLocation(): Promise<[number , number]>{

    return new Promise( (resolve, reject) =>{

      navigator.geolocation.getCurrentPosition(

        ({coords} ) => {
          this.useLocation = [coords.longitude, coords.latitude]
          resolve([coords.longitude, coords.latitude])
        },

        (err) =>{
          alert('No se pudo obtener la geolocalizacion')
          console.log(err);
          reject();
        }
      );      
    }
    )
  }
}
