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
  backgroundVideoPath: string;
  message: string;
  constructor(private http: HttpClient) {
    this.data = '';
    this.backgroundVideoPath = './assets/html-background.mov';
    this.message = 'under construction ...';
    this.getJSON().subscribe(data => {
      this.data = data;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data.json');
  }
}
