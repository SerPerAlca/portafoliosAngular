import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LlamadaPeliculasService {

  constructor(public http: HttpClient) { }

   /**
   * @description Funcion llamada Rest a API.
   * @author Sergio
   * @callback Promise
   * @argument string pelicula
   */  
  getPelicula = (pelicula) => fetch("https://www.omdbapi.com/?t="+pelicula+"&apikey=2a0b18")
  .then(data => data.json());

}
