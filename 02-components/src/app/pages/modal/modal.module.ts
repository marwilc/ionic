import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalPageRoutingModule } from './modal-routing.module';
import { ModalPage } from './modal.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        ModalPageRoutingModule,
    ],
    declarations: [ModalPage],
})
export class ModalPageModule {}
