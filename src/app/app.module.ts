import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PersonalSkillsComponent } from './personal-skills/personal-skills.component';
import { ObjectiveComponent } from './objective/objective.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { InternshipComponent } from './internship/internship.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { EducationComponent } from './education/education.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PersonalDetailsComponent,
    PersonalSkillsComponent,
    ObjectiveComponent,
    TechnicalSkillsComponent,
    ProjectsComponent,
    InternshipComponent,
    CertificationsComponent,
    EducationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
