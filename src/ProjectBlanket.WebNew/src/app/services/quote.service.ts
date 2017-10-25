import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Global } from "../shared/global";
import { HttpClient } from '@angular/common/http';



@Injectable()
export class QuoteService {

  constructor(private _http: HttpClient) { }

  get(url: string): Observable<any> {
    return this._http.get(url + 'userapi')
      .map(response => response)
     .catch(this.handleError);
  }

  post(url: string): Observable<any> {
    let body = {
      QuteNumber: 123
    };
    return this._http.post(url + 'quote/addQuote', body)
      .map(response => response)
      .catch(this.handleError);
  }

  list() {
    return this._http.get(Global.BASE_USER_ENDPOINT + '/quote/list/');
  }

  private handleError(error) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
}
