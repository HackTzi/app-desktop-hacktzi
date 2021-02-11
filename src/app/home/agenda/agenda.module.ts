import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AgendaComponent } from './agenda.component';

const routes: Routes = [{
  path: '',
  component: AgendaComponent
}]

@NgModule({
  declarations: [AgendaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AgendaModule { }
