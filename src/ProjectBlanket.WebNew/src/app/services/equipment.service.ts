import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Global } from '../shared/global';
import {EquipmentModel} from '../models/equipment/equipment';

@Injectable()
export class EquipmentService {
  constructor(private _http: Http) { }

  put(model: EquipmentModel): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(Global.BASE_USER_ENDPOINT + 'equipment/add', JSON.stringify(model), options)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }

 

  list() {
    return this._http.get(Global.BASE_USER_ENDPOINT + '/equipment/list/');
  }
  

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');//.json().error
  }
}
