import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TvComponent } from './tv.component';

const routes: Routes = [{
  path: '',
  component: TvComponent
}]

@NgModule({
  declarations: [TvComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TvModule { }
