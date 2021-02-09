/* eslint-disable @typescript-eslint/unbound-method */
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IconSanitizerService } from '../services/icon-sanitizer.service';
import { Svg } from '../shared/interfaces/svg.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(
  @Inject(FormBuilder) fb: FormBuilder,
    private router: Router,
    private iconServ: IconSanitizerService
  ) {

    this.iconServ.setSvgIcons(this.icons);

    this.authForm = fb.group({
      username: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.email]),
      password: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.pattern(this.passPattern)])
    });
  }
  private icons: Svg[] = [
    { iconName: 'metro-facebook', url: 'assets/icons/icon-metro-facebook.svg' },
    { iconName: 'metro-twitter', url: 'assets/icons/icon-metro-twitter.svg' },
    { iconName: 'visibility-filled', url: 'assets/icons/icon-visibility-filled.svg' },
    { iconName: 'metro-mail', url: 'assets/icons/icon-metro-mail.svg' },
  ];
  authForm: FormGroup;
  passPattern: RegExp;
  loading = false;
  pageName = 'PAGES.AUTH.';
  hidePassword = true;

  ngOnInit(): void { }

  // TODO: Add login call to auth.service
  login() {
    this.loading = true;
    localStorage.setItem('token', 'TOKEN FOR TEST SET IN AUTH COMPONENT');

    this.router.navigate(['/app/home']);
    setTimeout(() => this.loading = false, 2000); // Quit loading timeout for test
  }

}
