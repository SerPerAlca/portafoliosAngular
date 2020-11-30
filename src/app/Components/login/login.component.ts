import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mostrar : boolean = false;
  emailRegistro: string;
  passwordRegistro: string;
  confirmPasswordRegistro: string;
  passwordError: boolean;
  email: string;
  password: string;
  mensaje : string = '';
  cookie : string = '';
  token : string = '';

  constructor( private fB: FormBuilder, public uS: UsersService) { }

  ngOnInit(): void {
  }

    /**
   * @description: Función que: 
   * 1. La Api no me devuelve un token diferente aunque las contraseñas de Login
   * y Registro no coincidan, por lo que, he creado una comparación entre las mismas.
   * Si discrepan automaticamente mostrará el mensaje de "Usario incorrecto". 
   * 2. Crea un User. 
   * 3. Realiza una llamada a través del método login() del servicio UsersService 
   * pasándole ese User como parámetro.
   * 4. Recibe un Observable con un token.
   * 5. Compara ese token con el guardado en las cookies a través del 
   * método compareToken() del mismo servicio. 
   * 6. Si es igual mostrará mensaje de "Usario Correcto", de lo contrario mostrará 
   * mensaje de "Usuario Incorrecto". 
   * 7. Elimina el token de las cookies a través del método deleteToken() del 
   * mismo servicio también.
   * @callback: Observable
   * @author: Sergio Pérez
   */
  login() {
    this.mensaje = '';
    if (this.compareToken(this.password, this.passwordRegistro)){
      const user = {email: this.email, password: this.password};
      this.uS.login(user).subscribe( data=> {  
        console.log(data.token);
        this.cookie = this.uS.getToken();
        this.token = data.token;
      },  
        error => {
        console.error(error)
      })
      if (this.compareToken(this.token, this.cookie)){
        this.mensaje ="Usuario Correcto";
      }  else {
        this.mensaje ="Usuario Incorrecto";
      } 
    }else this.mensaje = "Usuario o Password Incorrecto. Debido al funcionamiento de la API externa, debe volver a registrarse";
    this.uS.deleteToken();
  }

  /**
   * @description: Función que crea objeto user de registro lo envía a través
   * del servicio UsersService por metodo post a la API.Recibe un token
   * que lo almacena dentro de las cookies a través del método setToken() 
   * del mismo servicio.  
   * @callback: Observable
   * @author: Sergio Pérez
   */
  register() {
    if (this.comparePassword(this.passwordRegistro, this.confirmPasswordRegistro)){
      const user = { email: this.emailRegistro, password: this.passwordRegistro};
      this.uS.register(user).subscribe( data => {
        this.uS.setToken(data.token)
        let cook = this.uS.getToken();
        console.log(cook);
        this.mensaje ="Registro Exitoso. A continuación, pruebe a hacer Login";
      },
      error => {
        console.error(error)
      });
    } else this.mensaje ="Las contraseñas deben ser iguales";
  }

  /**
   *@description Función para alternar el valor de la variable booleana mostrar.
   * De esta manera se puede desvelar, o no, el componente, haciendo click en
   * el botón destinado a tal fin.
   * @author Sergio Pérez
   */
  desvelar(){
    this.mostrar = (!this.mostrar);
  }

    /**
   * @description Funcion que compara el token guardado en las cookies con el 
   * recibido de la API.
   * @param token 
   * @param cookie 
   * @author Sergio Pérez
   */
  compareToken(token, cookie){
    let devuelve : boolean = false;
    if (token == cookie){
      devuelve = true;
      return devuelve;
    } else return devuelve;
  }

    /**
   * @description Función que compara la password de registro con la confirmación
   * de la misma, para evitar discrepancias en el registro de usuario.
   * @param passwordRegistro 
   * @param confirmPasswordRegistro 
   */
  comparePassword(passwordRegistro, confirmPasswordRegistro ){
    let devuelvePass : boolean = false;
    if (passwordRegistro == confirmPasswordRegistro){
      devuelvePass = true;
      return devuelvePass;
    } else return devuelvePass;
  }

}
