import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

         request = request.clone({
             setHeaders: {
                 Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
             }
         });
        return next.handle(request);
    }
}
