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
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  // { path: 'app', canActivate: [AuthGuard], redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'search', canActivate: [AuthGuard], component: SearchComponent },
  { path: 'my-courses', canActivate: [AuthGuard], component: MyCoursesComponent },
  { path: 'blog', canActivate: [AuthGuard], component: BlogComponent },
  { path: 'forum', canActivate: [AuthGuard], component: ForumComponent },
  { path: 'agenda', canActivate: [AuthGuard], component: AgendaComponent },
  { path: 'tv', canActivate: [AuthGuard], component: TvComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
