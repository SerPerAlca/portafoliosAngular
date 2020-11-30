//********** M O D U L O S ************
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


//****** C O M P O N E N T S **********
import { AppComponent } from './app.component';
import { MenuNavegacionComponent } from './Components/menu-navegacion/menu-navegacion.component';
import { MisProyectosComponent } from './Components/mis-proyectos/mis-proyectos.component';
import { GraficoComponent } from './Components/grafico/grafico.component';
import { BuscaPeliculasComponent } from './Components/busca-peliculas/busca-peliculas.component';
import { LoginComponent } from './Components/login/login.component';
import { CVComponent } from './Components/cv/cv.component';
import { ContactoComponent } from './Components/contacto/contacto.component';

//********* S E R V I C I O S ****************
import { WeatherService } from '../app/Services/weather.service';
import { CookieService } from 'ngx-cookie-service';
import { LlamadaPeliculasService } from '../app/Services/llamada-peliculas.service'; 
import { UsersService } from '../app/Services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavegacionComponent,
    MisProyectosComponent,
    GraficoComponent,
    BuscaPeliculasComponent,
    LoginComponent,
    CVComponent,
    ContactoComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,

  ],
  providers: [
    WeatherService,
    CookieService,
    LlamadaPeliculasService,
    UsersService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
