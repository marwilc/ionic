import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { ToastPageRoutingModule } from './toast-routing.module';
import { ToastPage } from './toast.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        ToastPageRoutingModule,
    ],
    declarations: [ToastPage],
})
export class ToastPageModule {}
