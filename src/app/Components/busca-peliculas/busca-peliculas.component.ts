import { Component, OnInit } from '@angular/core';
import { LlamadaPeliculasService } from '../../Services/llamada-peliculas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscapelis',
  templateUrl: './busca-peliculas.component.html',
  styleUrls: ['./busca-peliculas.component.css']
})
export class BuscaPeliculasComponent implements OnInit {
  titulo: string = '';
  actores : string = '';
  director: string = '';
  genero : string = '';
  portada : any;
  mostrar: boolean = false;
  movie : string;

  constructor( public lP: LlamadaPeliculasService, private fB: FormBuilder) { }

  ngOnInit(): void {
  }

  /**
   * @description Función asíncrona que recibe respuesta 
   * Promesa y guarda los datos en variables.
   */
  async buscar(){
    this.ocultar();
    let pelicula = encodeURIComponent(this.movie);
    const respuesta= await this.lP.getPelicula(pelicula)
     console.log(respuesta);
     this.titulo = respuesta.Title;
     this.portada = respuesta.Poster;
     this.actores = respuesta.Actors;
     this.director= respuesta.Director;
     this.genero = respuesta.Genre;
 
  }

   /**
    * @description Función que cambia el valor
    * de la variable booleana "mostrar" para
    * revelar o no, el componente.
    */
  ocultar(){
    this.mostrar = (!this.mostrar);
  }

}
