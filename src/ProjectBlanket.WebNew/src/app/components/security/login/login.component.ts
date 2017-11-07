import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../services/alert.service';
 
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    loginForm: FormGroup;
   color = 'primary';
   mode = 'indeterminate';
    
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

      this.color = 'primary';
      this.mode = 'indeterminate';
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
