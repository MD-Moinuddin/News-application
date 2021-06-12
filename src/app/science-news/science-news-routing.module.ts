import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScienceNewsComponent} from './science-news.component';

const routes: Routes = [
  { path: '', component: ScienceNewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScienceNewsRoutingModule { }
