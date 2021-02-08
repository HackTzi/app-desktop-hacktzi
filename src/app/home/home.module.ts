import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material.module';
import { AgendaComponent } from './agenda/agenda.component';
import { BlogComponent } from './blog/blog.component';
import { ForumComponent } from './forum/forum.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { SearchComponent } from './search/search.component';
import { TvComponent } from './tv/tv.component';

@NgModule({
  declarations: [HomeComponent, SearchComponent, MyCoursesComponent, BlogComponent, ForumComponent, AgendaComponent, TvComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    AngularMaterialModule
  ]
})
export class HomeModule {}
