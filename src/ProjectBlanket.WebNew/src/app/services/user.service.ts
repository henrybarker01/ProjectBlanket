import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { User } from '../models/security/user';
import { UserRegistrationInfo } from '../models/security/user-registration-info';
import { Global } from '../shared/global';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) { }

  getById(id: number) {
    return this._http.get('/api/users/' + id, this.jwt()).map(response => response);
  }

  create(user: UserRegistrationInfo) {
    return this._http.post(Global.BASE_USER_ENDPOINT + 'account/register', user);
  }

  update(user: User) {
    return this._http.put('/api/users/' + user.id, user, this.jwt()).map(response => response);
  }

  get(url: string): Observable<any> {
    return this._http.get(url + 'userapi')
      .map((response: Response) => <any>response)
     .catch(this.handleError);
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      return new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
    }
  }



  register(url: string, userRegistrationInfo: any) {
    let body = JSON.stringify(userRegistrationInfo);
    return this._http.post(url + 'Account/Register', body)
      .map((response: Response) => <any>response)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }

}
