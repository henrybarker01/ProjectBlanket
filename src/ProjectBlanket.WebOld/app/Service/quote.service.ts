import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuoteService {
    constructor(private _http: Http) { }

    get(url: string): Observable<any> {
        return this._http.get(url + 'userapi')
            .map((response: Response) => <any>response.json())
            // .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    post(url: string): Observable<any> {
        let body = {
            QuteNumber: 123
        };
        //JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url + 'quote/addQuote', body, options)
            .map((response: Response) => <any>response)//.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
            console.error(error);
            return Observable.throw(error || 'Server error');//.json().error
        }
}
