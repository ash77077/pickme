import {inject} from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpHandlerFn, HttpErrorResponse
} from '@angular/common/http';
import {Observable, tap, throwError} from 'rxjs';
import {AuthService} from "../../routes/auth/services/auth.service";
import {catchError} from "rxjs/operators";

export function AuthInterceptor(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authService: AuthService = inject(AuthService);

  let token: string = '';
  let headers: any = {};
  if (!req.url.includes('/login') && sessionStorage?.getItem('access-token')) {
    token = JSON.parse(sessionStorage?.getItem('access-token') || '');
    headers['x-auth-token'] = token;
  }


  const reqWithHeader: HttpRequest<any> = req.clone({
    setHeaders: headers,
  });
  return next(reqWithHeader)
    .pipe(
      catchError((err: HttpErrorResponse): Observable<any> => {
        if (err?.status === 401) {
          authService.logOut();
          return throwError(err);
        }
        return throwError(err);
      }), tap((res: any): void => {
        if (res.url === 'https://pickaway.armfree.com/api/v1/auth' && res.body.id) {
          authService.setUser(res.body);
        }
      })
    );
}
