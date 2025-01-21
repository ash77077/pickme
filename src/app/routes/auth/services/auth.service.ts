import { Injectable, Injector } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { map, Observable, tap, throwError } from 'rxjs';
import { INewPassword, IUser, UserModel } from 'src/app/core/models/user.model';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  protected override baseURL: string = 'http://vmi2049167.contaboserver.net/auth/api/v1';
  public user: UserModel;
  private up: string = '';

  get getPass(): string {
    return this.up;
  }

  set setPass(up: string) {
    this.up = up;
  }

  constructor(
    protected override injector: Injector,
    private userService: UserService,
    private router: Router,
  ) {
    super(injector);
  }

  login(body: any): Observable<IUser> {
    return this.post<IUser>(['jwt/token'], body)
      .pipe(
        map((obj: IUser): UserModel => new UserModel(obj)),
        tap((user: UserModel): void => {
          this.setUser(user);
        }),
        catchError((error: HttpErrorResponse) => {
          this.setUser(null);
          if ([491, 404].includes(error.status)) {
            // this.notificationService.httpError(error);
          }
          return throwError(() => new Error(error.message));
        }),
        // finalize(() => this.loadingService.hide())
      );
  }

  signUp(body: any): Observable<IUser> {
    return this.post<IUser>(['user'], body)
      .pipe(catchError((error: HttpErrorResponse) => {
          return throwError(() => new Error(error.message));
        }),
      );
  }

  sendActivationCode(body: any): Observable<IUser> {
    return this.post<IUser>(['user/activation'], body)
      .pipe(catchError((error: HttpErrorResponse) => {
          return throwError(() => new Error(error.message));
        }),
      );
  }

  public setUser(user: UserModel): void {
    if (user?.id) {
      if (!this.router.url.includes('/auth/set-password') && !this.router.url.includes('/auth')) {
      }
      this.userService.isLoggedIn = true;
      this.user = this.userService.user = new UserModel(user);
      this.userService.currentUser$.next(new UserModel(user));
    } else {
      this.userService.isLoggedIn = false;
      this.user = this.userService.user = null;
      this.userService.currentUser$.next(null);
      sessionStorage.clear();
      this.router.navigate(['/auth']);
    }
  }

  public logOut(): void {
    this.setUser(null);
  }

  setNewPassword(body: INewPassword): Observable<IUser> {
    return this.post<IUser>(['Auth', 'updatepw'], body);
  }
}
