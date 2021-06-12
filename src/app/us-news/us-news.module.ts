import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsNewsRoutingModule } from './us-news-routing.module';
import { UsNewsComponent } from './us-news.component';


@NgModule({
  declarations: [UsNewsComponent],
  imports: [
    CommonModule,
    UsNewsRoutingModule
  ]
})
export class UsNewsModule { }
