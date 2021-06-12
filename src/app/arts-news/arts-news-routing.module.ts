import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtsNewsComponent} from './arts-news.component';

const routes: Routes = [
  { path: '', component: ArtsNewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtsNewsRoutingModule { }
