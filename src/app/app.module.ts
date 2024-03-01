import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field' 
import { MatInputModule } from '@angular/material/input' 
import {ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEscuelasComponent } from './components/lista-escuelas/lista-escuelas.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component'; 
import { DetalleEscuelaComponent } from './components/detalle-escuela/detalle-escuela.component';
import { SearchComponent } from './components/search/search.component';
import { SearchPipe } from './components/search/pipes/search.pipe';
import { GeolocalizacionComponent } from './components/geolocalizacion/geolocalizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEscuelasComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    DetalleEscuelaComponent,
    SearchComponent,
    SearchPipe,
    GeolocalizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
