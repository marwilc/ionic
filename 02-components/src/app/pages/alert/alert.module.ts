import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { AlertPageRoutingModule } from './alert-routing.module';
import { AlertPage } from './alert.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlertPageRoutingModule,
        ComponentsModule,
    ],
    declarations: [AlertPage],
})
export class AlertPageModule {}
