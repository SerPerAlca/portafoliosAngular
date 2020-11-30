import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 
  constructor( public http: HttpClient) { }

  
  /**
   * @description Función llamada REST a API.
   * @callback Promise
   * @author SergioPérez
   */
  daysWeather = () => {
    return fetch("https://api.openweathermap.org/data/2.5/forecast?q=Madrid,es&units=metric&appid=b9b020b6d1e6f27648dabb6230f7e5cc")
    .then(data => data.json());
  }
}
