import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { TranslateModule } from '@ngx-translate/core';
import { AngularMaterialModule } from '../../angular-material.module';

const routes: Routes = [{
  path: '',
  component: SearchComponent
}] 

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    AngularMaterialModule
  ]
})
export class SearchModule { }
