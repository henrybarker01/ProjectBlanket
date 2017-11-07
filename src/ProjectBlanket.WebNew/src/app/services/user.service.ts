import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { UserRegistrationInfo } from '../models/security/user-registration-info';
import { Global } from '../shared/global';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) { }
  
  getById(id: number) {
    //return this._http.get('/api/users/' + id, this.jwt()).map(response => response);
  }

  create(user: UserRegistrationInfo) {
    return this._http.post(Global.BASE_USER_ENDPOINT + 'account/register', user);
  }
  
  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      return new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
    }
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
}
