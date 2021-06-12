import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorldNewsComponent} from './world-news.component';

const routes: Routes = [
  { path: '', component: WorldNewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldNewsRoutingModule { }
