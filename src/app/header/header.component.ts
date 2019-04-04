import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <a href="#default" class="logo"><img src="../../assets/logo.png" alt="logo"></a>
      <div class="header-right">
        <a class="active" href="#home">Home</a>
        <a href="#cv">CV</a>
        <a href="#linkedIn">LinkedIn</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
