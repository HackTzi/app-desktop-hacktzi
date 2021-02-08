import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { AgendaComponent } from './agenda/agenda.component';
import { BlogComponent } from './blog/blog.component';
import { ForumComponent } from './forum/forum.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      // { path: '', redirectTo: '/home', pathMatch: 'full' },
      // { path: 'home', component: HomeComponent },
      { path: 'search', component: SearchComponent },
      { path: 'my-courses', component: MyCoursesComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'forum', component: ForumComponent },
      { path: 'agenda', component: AgendaComponent },
      { path: 'tv', component: TvComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
