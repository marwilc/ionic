import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { NavController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/post.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    token: string = null;
    user: User = {};

    constructor(
        private http: HttpClient,
        private navCtrl: NavController
    ) {}

    getUser() {
        // eslint-disable-next-line no-underscore-dangle
        if (!this.user._id) {
            this.validToken();
        }

        return { ...this.user };
    }

    login(email: string, password: string) {
        const data = { email, password };

        return this.http
            .post<any>(`${environment.url}/user/login`, data)
            .pipe(
                tap(async (response) => {
                    if (response.ok) {
                        await this.saveToken(response.token);
                    } else {
                        this.token = null;
                        await Storage.clear();
                    }
                })
            );
    }

    register(user: User) {
        return this.http
            .post<any>(`${environment.url}/user/create`, user)
            .pipe(
                tap(async (response) => {
                    if (response.ok) {
                        await this.saveToken(response.token);
                    } else {
                        this.token = null;
                        await Storage.clear();
                    }
                })
            );
    }

    updateUser(user: User) {
        const headers = new HttpHeaders({
            'x-token': this.token,
        });

        return new Promise((resolve) => {
            this.http
                .post<any>(`${environment.url}/user/update`, user, {
                    headers,
                })
                .subscribe((response) => {
                    if (response.ok) {
                        this.saveToken(response.token);
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });
        });
    }

    async saveToken(token: any) {
        this.token = token;
        await Storage.set({ key: 'token', value: token });
    }

    async loadToken() {
        const token = (await Storage.get({ key: 'token' })) || null;
        this.token = token ? token.value : null;
    }

    async validToken(): Promise<boolean> {
        await this.loadToken();

        if (!this.token) {
            this.navCtrl.navigateRoot('/login');
            return Promise.resolve(false);
        }

        return new Promise<boolean>((resolve) => {
            const headers = new HttpHeaders({
                'x-token': this.token,
            });

            this.http
                .get<any>(`${environment.url}/user`, { headers })
                .subscribe((response) => {
                    if (response.ok) {
                        this.user = response.user;
                        resolve(true);
                    } else {
                        this.navCtrl.navigateRoot('/login');
                        resolve(false);
                    }
                });
        });
    }
}
