import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
// import { HomeNewsComponent } from './home-news/home-news.component';
import { ArtsNewsService } from '../services/arts-news.service';
import { UsNewsService } from '../services/us-news.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ArtsNewsService,
    UsNewsService
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
