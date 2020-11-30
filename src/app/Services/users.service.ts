import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private cookies: CookieService) { }


  /**
   * @description: Función llamada a la API (Autenticación). 
   * @param user 
   * @callback: Observable
   * @author: Sergio Pérez
   */
  login(user: any) : Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }

    /**
   * @description: Función llamada a la API (Registro). 
   * @param user 
   * @callback: Observable
   * @author: Sergio Pérez
   */
  register(user: any) : Observable<any>{
    return this.http.post("https://reqres.in/api/register", user);
  }

   /**
   * @description Función que edita/sobreescribe el valor "token" de las
   * cookies por el token que es pasado por parámetro
   * @param token 
   * @author Sergio Pérez
   */
  setToken(token: string) {
    this.cookies.set("token", token);
  }

   /**
   * @description Función que obtiene el valor llamado "token" de las cookies.
   * @callback Cookie "token"
   * @author Sergio Pérez
   */
  getToken(){
    return this.cookies.get("token");
  }

   /**
   * @description Función que elimina el token guardado en las cookies.
   * @author Sergio Pérez
   */
  deleteToken(){
    this.cookies.delete("token");
  }
}
