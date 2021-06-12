import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScienceNewsRoutingModule } from './science-news-routing.module';
import { ScienceNewsComponent } from './science-news.component';


@NgModule({
  declarations: [ScienceNewsComponent],
  imports: [
    CommonModule,
    ScienceNewsRoutingModule
  ]
})
export class ScienceNewsModule { }
