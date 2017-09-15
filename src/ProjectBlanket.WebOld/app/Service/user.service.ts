import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { User } from '../Model/Security/user';
import { UserRegistrationInfo } from '../Model/Security/user-registration-info';
import { Global } from '../Shared/global';
 

@Injectable()
export class UserService {
    constructor(private _http: Http) { }

    getById(id: number) {
        return this._http.get('/api/users/' + id, this.jwt()).map((response: Response) => response);
    }

    create(user: UserRegistrationInfo) {
         return this._http.post(Global.BASE_USER_ENDPOINT + 'account/register', user);

       

    }

    update(user: User) {
        return this._http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response);
    }

    get(url: string): Observable<any> {
        return this._http.get(url + 'userapi')
            .map((response: Response) => <any>response)
            // .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

    post(url: string, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url + 'userapi', body, options)
            .map((response: Response) => <any>response)
            .catch(this.handleError);
    }

    put(url: string, id: number, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(url + 'userapi/' + id, body, options)
            .map((response: Response) => <any>response)
            .catch(this.handleError);
    }

    delete(url: string, id: number): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url + 'userapi/' + id, options)
            .map((response: Response) => <any>response)
            .catch(this.handleError);
    }

    register(url: string, userRegistrationInfo: any) {
        let body = JSON.stringify(userRegistrationInfo);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url + 'Account/Register', body)//, options)
            .map((response: Response) => <any>response)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }

}