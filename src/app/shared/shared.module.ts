import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { LoginBannerComponent } from './components/login-banner/login-banner.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    WebviewDirective,
    LoginBannerComponent,

  ],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [
    TranslateModule,
    WebviewDirective,
    FormsModule,
    LoginBannerComponent


  ]
})
export class SharedModule {}
