import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-personal-skills',
  templateUrl: './personal-skills.component.html',
  styleUrls: ['./personal-skills.component.css']
})
export class PersonalSkillsComponent implements OnInit {
  @Input() personalSkills: string[] = [];
  constructor() {}

  ngOnInit(): void {}

}
