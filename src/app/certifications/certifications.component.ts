import { Component,Input, OnInit } from '@angular/core';

interface Icertification {
  name1: string,
  name1Link:string,
  name2: string,
  name2Link: string,
  courseName: string,
  platform: string
}

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})

export class CertificationsComponent implements OnInit {
@Input() certification: Icertification[]=[];
  constructor() {}

  ngOnInit(): void {}

}

