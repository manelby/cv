import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: string;
  constructor(private http: HttpClient) {
    this.data = '';
    this.getJSON().subscribe(data => {
      this.data = data;
      console.log(data);
      console.log(data.FirstName);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data.json');
  }
}
