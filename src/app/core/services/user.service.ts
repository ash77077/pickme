import { Injectable, Injector } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
    providedIn: 'root'
})
export class UserService extends ApiService {
    public currentUser$: ReplaySubject<UserModel> = new ReplaySubject<UserModel>(1);
    public loggedIn$ = this.currentUser$.pipe(map((user) => !!user));
    public user: UserModel;
    public isLoggedIn: boolean = false;

    constructor(
        protected override injector: Injector
    ) {
        super(injector);
    }

    getUserInfo(): Observable<UserModel> {
        return this.get<UserModel>(['auth/auth']).pipe(
            map((user: UserModel) => new UserModel(user))
        );
    }

}
