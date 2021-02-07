import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';


// Guards
import { AuthGuard } from './guards/auth.guard';

// Components
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AuthComponent } from './auth/auth.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { BlogComponent } from './blog/blog.component';
import { ForumComponent } from './forum/forum.component';
import { AgendaComponent } from './agenda/agenda.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], redirectTo: '/app', pathMatch: 'full' },
  {
    path: 'app', component: HomeComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'search', component: SearchComponent },
      { path: 'my-courses', component: MyCoursesComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'forum', component: ForumComponent },
      { path: 'agenda', component: AgendaComponent },
      { path: 'tv', component: TvComponent },
    ]
  },
  { path: 'auth', component: AuthComponent },
  { path: '**', component: PageNotFoundComponent, } // Wildcard route for a 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HomeRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
