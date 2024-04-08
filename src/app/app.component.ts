import { Component } from '@angular/core';
import { Istd } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'ioStudent';
  stdArr : Array<Istd> = [
    {
      fname : 'rakshanda',
      lname : 'bulbule',
      email : 'rb@gmail.com',
      contact : 122533768483
    }
  ]

  getStdObj(std : any){
    console.log(std)
    this.stdArr.push(std)
  }
 
}
