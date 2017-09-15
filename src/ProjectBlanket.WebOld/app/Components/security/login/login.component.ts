﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../Service/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../Service/alert.service';


@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    loginForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['']
        });
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
            .subscribe(()=> {
                this.router.navigateByUrl('/dashboard');
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}
