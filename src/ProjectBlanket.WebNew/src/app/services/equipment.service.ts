import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Global } from '../shared/global';
import { EquipmentModel } from '../models/equipment/equipment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EquipmentService {
  constructor(private _http: HttpClient) { }

  put(model: EquipmentModel): Observable<any> {
    return this._http.put(Global.BASE_USER_ENDPOINT + 'equipment/add', JSON.stringify(model))
      .map(response => response)
      .catch(this.handleError);
  }


  list() {
    return this._http.get(Global.BASE_USER_ENDPOINT + 'equipment/list/');
  }

  get(id: string) {
    return this._http.get(Global.BASE_USER_ENDPOINT + 'equipment/get/' + id);
  }

  getCalibrationsDueInSixMonths() {
    return this._http.get(Global.BASE_USER_ENDPOINT + 'equipment/getCalibrationsDueInSixMonths');
  }


  private handleError(error) {
    console.error(error);
    return Observable.throw(error || 'Server error'); 
  }
}
