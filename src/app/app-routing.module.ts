import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './homepage/homepage.module#HomepageModule'},
  // {path: 'homepage', loadChildren: './homepage/homepage.module#HomepageModule'},
  { path: 'home', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'us-news', loadChildren: () => import('./us-news/us-news.module').then(m => m.UsNewsModule) },
  { path: 'science-news', loadChildren: () => import('./science-news/science-news.module').then(m => m.ScienceNewsModule) },
  { path: 'world-news', loadChildren: () => import('./world-news/world-news.module').then(m => m.WorldNewsModule) },
  { path: 'arts-news', loadChildren: () => import('./arts-news/arts-news.module').then(m => m.ArtsNewsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
