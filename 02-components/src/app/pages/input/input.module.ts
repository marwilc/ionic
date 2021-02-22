import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { InputPageRoutingModule } from './input-routing.module';
import { InputPage } from './input.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InputPageRoutingModule,
        ComponentsModule,
    ],
    declarations: [InputPage],
})
export class InputPageModule {}
