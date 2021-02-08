/* eslint-disable @typescript-eslint/unbound-method */
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
    private router: Router
  ) {
    this.authForm = fb.group({
      username: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.email]),
      password: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.pattern(this.passPattern)])
    });
  }
  authForm: FormGroup;
  passPattern: RegExp;
  loading = false;

  ngOnInit(): void { }

  // TODO: Add login call to auth.service
  login() {
    this.loading = true;
    localStorage.setItem('token', 'TOKEN FOR TEST SET IN AUTH COMPONENT');

    this.router.navigate(['/app/home']);
    setTimeout(() => this.loading = false, 2000); // Quit loading timeout for test
	}

}
