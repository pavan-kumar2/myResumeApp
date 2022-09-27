import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {
@Input() internship:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
