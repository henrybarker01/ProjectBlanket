import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { Global } from '../shared/global';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable()
export class AuthenticationService {
  constructor(private _http: HttpClient) { }

  login(username: string, password: string) {
    return this.getUserToken(username, password).map(response => {
      sessionStorage.removeItem('accessToken');
      sessionStorage.setItem('accessToken', _.values(response)[0]);
      return true;
    });
  }

  getUserToken(userName: string, password: string) {
    let user = 'userName=' +
      encodeURIComponent(userName) +
      '&password=' +
      encodeURIComponent(password) +
      '&grant_type=password';
    return this._http.post(Global.BASE_USER_ENDPOINT + 'Token', user);
  }


  logout() {
    sessionStorage.removeItem('accessToken');
  }
}
