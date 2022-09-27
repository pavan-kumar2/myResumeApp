import { Component, Input, OnInit } from '@angular/core';

interface IEducation{
  program: string,
  stream: string,
  institution: string,
  aggregate: string,
  from: number,
  to: number
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {
@Input() education: IEducation[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
