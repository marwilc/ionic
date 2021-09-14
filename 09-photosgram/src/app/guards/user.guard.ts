import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root',
})
export class UserGuard implements CanActivate, CanLoad {
    constructor(private user: UserService) {}

    canLoad(): boolean | Observable<boolean> | Promise<boolean> {
        return this.user.validToken();
    }
    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }
}
