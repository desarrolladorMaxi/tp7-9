import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  titulo:String;

  constructor(){
   this.titulo = "Bienvenidos a mi página de inicio usando interpolación!.";
  }
}
