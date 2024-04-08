import { Component, Input, OnInit } from '@angular/core';
import { Istd } from 'src/app/models/student';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
  @Input() getStdInfo !: Array<Istd>
  constructor() { }

  ngOnInit(): void {
  }

}
