import {
  Component,
  Input,
  OnInit
} from '@angular/core';

interface IProjects {
  name: string,
  projectUrl: string,
  details: string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  @Input() projects: IProjects[] = [];
  constructor() {}

  ngOnInit(): void {}

}
