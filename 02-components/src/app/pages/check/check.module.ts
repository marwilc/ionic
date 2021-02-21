import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { CheckPageRoutingModule } from './check-routing.module';
import { CheckPage } from './check.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CheckPageRoutingModule,
        ComponentsModule,
    ],
    declarations: [CheckPage],
})
export class CheckPageModule {}
