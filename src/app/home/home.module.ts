import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'agenda',
  loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule)
}, {
  path: 'blog',
  loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
}, {
  path: 'forum',
  loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule)
}, {
  path: 'my-courses',
  loadChildren: () => import('./my-courses/my-courses.module').then(m => m.MyCoursesModule)
}, {
  path: 'search',
  loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
}, {
  path: 'tv',
  loadChildren: () => import('./tv/tv.module').then(m => m.TvModule)
}]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    AngularMaterialModule
  ]
})
export class HomeModule {}
