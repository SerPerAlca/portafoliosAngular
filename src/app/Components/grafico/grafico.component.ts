import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../../Services/weather.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  tempMax: number[] = [];
  tempMin: number[] = [];
  mostrar: boolean = false;
  days: string[] = [];

  constructor( public wS: WeatherService ) { }

  ngOnInit(): void {
  }

  /**
   * @description Función asíncrona que recorre respuesta
   * Promesa para asignar los datos a arrays. 
   * Después llama a función mostrar gráfico.
   * @author Sergio Pérez
   */
  async getClima(){
    // this.mostrar = true;
    this.ocultar();
    const res= await this.wS.daysWeather(); //De esta forma convierto en síncrona esta función.
      let i: number = 0;
      for( i; i < res.list.length; i++ ){ 
        this.tempMax.push(res.list[i].main.temp_max);
        this.tempMin.push(res.list[i].main.temp_min);
        this.days.push(res.list[i].dt_txt);
      }
      this.mostrarGrafico();
  }

  /**
   * @description Función que construye
   * los datos necesarios para renderizar el gráfico.
   * @author Sergio Pérez
   */
  mostrarGrafico = () => {
    console.log("cargando grafico")
    console.log(this.tempMax, this.tempMin);
    var chart = new Chart('canvas', {
      type: 'line',
      data: {
          labels: this.days,
          datasets: [
            {
              label: "Temperatura Máxima",
              data: this.tempMax,
              backgroundColor: "green",
              fill: false,
              borderWidth: 1
            },
            {
              data: this.tempMin,
              backgroundColor: "aqua",
              fill: false,
              borderWidth: 1,

              type: 'bar'
            }  
        ], 
      },
              options: {
                legend: {
                  display: false
                },
                  scales: {
                    xAxes: [
                      {
                        display: true
                      }
                    ],
                      yAxes: [{
                        display: true,
                          ticks: {
                              beginAtZero: true
                          }
                      }]
                  }
              },
          });
         
          chart.update();
          
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
