import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDividerModule, MatListModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
