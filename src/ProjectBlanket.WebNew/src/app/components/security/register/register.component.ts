import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
    model: any = {};
    loading: boolean = false;
    registerForm: FormGroup;


    constructor(
        private router: Router,
        private userService: UserService,
        private fb: FormBuilder,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.registerForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }

    register() {
        this.loading = true;
        this.userService.create(this.registerForm.value)
            .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}
