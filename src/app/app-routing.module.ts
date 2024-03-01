import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEscuelasComponent } from './components/lista-escuelas/lista-escuelas.component';
import { IndexComponent } from './components/index/index.component';
import { DetalleEscuelaComponent } from './components/detalle-escuela/detalle-escuela.component';
const routes: Routes = [
  {path : 'inicio', component : IndexComponent},
  {path :'', redirectTo:'inicio', pathMatch:'full'},
  {path : "escuela-detalle/:id", component : DetalleEscuelaComponent},
  {path : 'escuelas', component : ListaEscuelasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
