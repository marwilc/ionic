import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    @ViewChild('slideMain') slides: IonSlides;
    loginForm: FormGroup = this.createLoginForm();
    registerForm: FormGroup = this.createRegisterForm();

    avatars = [
        {
            img: 'av-1.png',
            seleccionado: true,
        },
        {
            img: 'av-2.png',
            seleccionado: false,
        },
        {
            img: 'av-3.png',
            seleccionado: false,
        },
        {
            img: 'av-4.png',
            seleccionado: false,
        },
        {
            img: 'av-5.png',
            seleccionado: false,
        },
        {
            img: 'av-6.png',
            seleccionado: false,
        },
        {
            img: 'av-7.png',
            seleccionado: false,
        },
        {
            img: 'av-8.png',
            seleccionado: false,
        },
    ];

    avatarSlide = {
        slidesPerView: 3.5,
    };

    private sub = new Subscription();

    constructor(
        private fb: FormBuilder,
        private user: UserService,
        private navCtrl: NavController,
        private ui: UiService
    ) {}

    ngOnInit() {
        setTimeout(() => {
            this.slides.lockSwipes(true);
        }, 100);
    }

    login() {
        if (this.loginForm.invalid) {
            return;
        }

        const { email, password } = this.loginForm.value;
        this.sub.add(
            this.user.login(email, password).subscribe(
                async (response) => {
                    if (response.ok) {
                        this.navCtrl.navigateRoot('/main/tabs/tab1', {
                            animated: true,
                        });
                    } else {
                        await this.ui.informAlert(
                            'User And Password incorrects'
                        );
                    }
                },
                async (err) => {
                    await this.ui.informAlert(
                        'User And Password incorrects'
                    );
                }
            )
        );
    }

    register() {
        if (this.registerForm.invalid) {
            return;
        }

        const { email, password, avatar, name } =
            this.registerForm.value;

        this.sub.add(
            this.user
                .register({ email, password, avatar, name })
                .subscribe(
                    async (response) => {
                        if (response.ok) {
                            this.navCtrl.navigateRoot(
                                '/main/tabs/tab1',
                                {
                                    animated: true,
                                }
                            );
                        } else {
                            await this.ui.informAlert(
                                'User And Password incorrects'
                            );
                        }
                    },
                    async (err) => {
                        await this.ui.informAlert(
                            'User And Password incorrects'
                        );
                    }
                )
        );
    }

    goToLogin() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    }

    goToRegister() {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    }

    selectAvatar(avatar) {
        this.avatars.forEach((av) => (av.seleccionado = false));
        avatar.seleccionado = true;
        this.registerForm.get('avatar').setValue(avatar.img);
    }

    private createLoginForm(): FormGroup {
        return this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    private createRegisterForm(): FormGroup {
        return this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            name: ['', Validators.required],
            avatar: ['av-1.png', Validators.required],
        });
    }
}
