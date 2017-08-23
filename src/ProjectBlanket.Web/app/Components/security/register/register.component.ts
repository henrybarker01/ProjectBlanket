import { Component } from '@angular/core'
import { UserService } from '../../../Service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Global } from '../../../Shared/global';

@Component({
    selector: 'register',
    templateUrl: 'app/components/security/register/register.component.html'
})

export class RegisterComponent {

    constructor(private fb: FormBuilder, private _userService: UserService) { }

    register() {
        let userRegitrationInfo = {
            Email: 'henry.barker@live.com',
            Password: 'P@ssw0rd!@#',
            ConfirmPassword: 'P@ssw0rd!@#'
        };
        this._userService.register(Global.BASE_USER_ENDPOINT, userRegitrationInfo).subscribe(
            data => {
                console.log(data);


            },
            error => {
                 
            }
        );
    }
}