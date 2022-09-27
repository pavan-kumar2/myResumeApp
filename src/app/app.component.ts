import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  resume: any = null;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://gist.githubusercontent.com/pavan-kumar2/b93d331e7f494708fccf2f8e52dc9721/raw/ef143d71ff787e9f9e42173baa9ae559e4212433/resume.json')
      .subscribe(res => {
        this.resume = res;
        console.log(res);
      })
  }

}
