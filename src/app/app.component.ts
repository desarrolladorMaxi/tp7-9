import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp7-9';

  piePag:String;

  constructor(){
    this.piePag= "De mis compañer@s solo de algunos se el nombre no de todos, por eso no puedo pasar información de ell@s"
  }
}
