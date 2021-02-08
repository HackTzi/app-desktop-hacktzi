import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

// Routes
import { HomeRoutingModule } from './home/home-routing.module';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Components
import { AuthComponent } from './auth/auth.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'app', canActivate: [AuthGuard], component: MenuComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, } // Wildcard route for a 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      preloadingStrategy: PreloadAllModules
    }),
    HomeRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
