import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-navegacion',
  templateUrl: './menu-navegacion.component.html',
  styleUrls: ['./menu-navegacion.component.css']
})
export class MenuNavegacionComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }
  direccionar(url:string){
    this.router.navigate([url])
  }
}
