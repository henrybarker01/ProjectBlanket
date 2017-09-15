import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { Global } from '../shared/global';

@Injectable()
export class AuthenticationService {
    constructor(private _http: Http) { }

    login(username: string, password: string) {
        return this.getUserToken(username, password).map((response: Response) => {
            sessionStorage.removeItem('accessToken');
             sessionStorage.setItem('accessToken', response.json().access_token);
            return true;
        });
    }

    getUserToken(userName: string, password: string) {
        let user = 'userName=' +
            encodeURIComponent(userName) +
            '&password=' +
            encodeURIComponent(password) +
            '&grant_type=password';

       // return this.http.post(Global.BASE_USER_ENDPOINT + 'Token', user);
         
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(Global.BASE_USER_ENDPOINT + 'Token', user, options)
            ;
    }


    logout() {
        sessionStorage.removeItem('accessToken');
    }
}
