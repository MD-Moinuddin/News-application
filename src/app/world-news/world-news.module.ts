import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldNewsRoutingModule } from './world-news-routing.module';
import { WorldNewsComponent } from './world-news.component';


@NgModule({
  declarations: [WorldNewsComponent],
  imports: [
    CommonModule,
    WorldNewsRoutingModule
  ]
})
export class WorldNewsModule { }
