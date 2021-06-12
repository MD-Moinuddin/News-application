import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtsNewsRoutingModule } from './arts-news-routing.module';
import { ArtsNewsComponent } from './arts-news.component';


@NgModule({
  declarations: [ArtsNewsComponent],
  imports: [
    CommonModule,
    ArtsNewsRoutingModule
  ]
})
export class ArtsNewsModule { }
