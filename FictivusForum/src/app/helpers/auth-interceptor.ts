import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if(localStorage.getItem("token") != null){
        req = req.clone({
            setHeaders: {
              'Authorization': 'Bearer '+localStorage.getItem("token"),
              'Content-Type': 'application/json',
            },

          });
      }
      console.log(req);
    return next.handle(req);
  }
}