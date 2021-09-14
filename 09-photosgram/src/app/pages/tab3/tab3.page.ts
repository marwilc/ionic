import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/post.model';
import { UiService } from 'src/app/services/ui.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
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

    userForm: FormGroup = this.createUserForm();

    user: User = {};

    constructor(
        private userService: UserService,
        private fb: FormBuilder,
        private uiService: UiService
    ) {}

    ngOnInit(): void {
        this.user = this.userService.getUser();

        if (this.user) {
            this.patchValueUser();
        }
    }

    patchValueUser() {
        const { avatar, email, name } = this.user;

        this.userForm.patchValue({ avatar, email, name });
        const avt = this.avatars.find((a) => a.img === avatar);
        this.selectAvatar(avt);
    }

    logout() {}

    selectAvatar(avatar) {
        this.avatars.forEach((av) => (av.seleccionado = false));
        avatar.seleccionado = true;
        this.user.avatar = avatar.img;
        this.userForm.get('avatar').setValue(avatar.img);
    }

    async updateUser() {
        if (this.userForm.invalid) {
            return;
        }

        const { email, name, avatar } = this.userForm.value;
        const update = await this.userService.updateUser({
            email,
            name,
            avatar,
        });

        if (update) {
            this.uiService.presentToast('Updated Register');
        } else {
            this.uiService.presentToast('Updated error');
        }
    }

    private createUserForm(): FormGroup {
        return this.fb.group({
            email: ['', Validators.required],
            name: ['', Validators.required],
            avatar: [''],
        });
    }
}
