import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsNewsComponent} from './us-news.component';

const routes: Routes = [
  { path: '', component: UsNewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsNewsRoutingModule { }
