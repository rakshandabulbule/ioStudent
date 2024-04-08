import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from 'src/app/models/student';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  fname !: string
  lname !: string
  email !: string
  contact !: string

  @Output() emmitStdInfo : EventEmitter<Istd> = new EventEmitter<Istd>()
  constructor() { }

  ngOnInit(): void {
  }
  onStdAdd(){ 
    if(this.fname && this.lname && this.email && this.contact){
      let newStd : Istd = {
        fname : this.fname,
        lname : this.lname,
        email : this.email,
        contact : +this.contact
        
       
      }
      console.log(newStd)
      this.emmitStdInfo.emit(newStd)
      this.fname = this.lname = this.email = this.contact = ''
    }
  }

}
