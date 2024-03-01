import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
 
  transform(lista: any[], texto: string, campo: String): any[] {

    if (!texto) return lista;


    if (campo == "nombre") {
      return lista.filter(escuela => escuela.nombre.toUpperCase().includes(texto.toUpperCase()));
    } else if (campo == "jurisdiccion") {
      return lista.filter(escuela => escuela.jurisdiccion.toUpperCase().includes(texto.toUpperCase()));
    } else if (campo == "direccion") {
      return lista.filter(escuela => escuela.direccion.toUpperCase().includes(texto.toUpperCase()));
    }
    else {
      return [];
    }
  }
}

