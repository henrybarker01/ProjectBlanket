import { Injectable } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Global } from '../shared/global';
import * as _ from 'lodash';

@Injectable()
export class DashboardService {
  constructor(private _http: HttpClient) {}

  put(model: any): Observable<any> {
 return this._http.put(Global.BASE_USER_ENDPOINT + 'dashboard/add', model)
   .map(data => _.values(data))
     // .catch(this.handleError);
  }

  saveDashboard(model: any): Observable<any> {
 return this._http.post(Global.BASE_USER_ENDPOINT + 'dashboard/saveDashboard', model)
   .map(data => _.values(data))
     // .catch(this.handleError);
  }

  getLayout() {
    return this._http.get(Global.BASE_USER_ENDPOINT + 'dashboard/getDashboardWidgetsByUserId');
  }

  private handleError(error: Response) {
    
   // return Observable.throw(error || 'Server error'); 
  }
}
