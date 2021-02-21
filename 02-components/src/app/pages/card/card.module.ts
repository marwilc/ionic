import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { CardPageRoutingModule } from './card-routing.module';
import { CardPage } from './card.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CardPageRoutingModule,
        ComponentsModule,
    ],
    declarations: [CardPage],
})
export class CardPageModule {}
