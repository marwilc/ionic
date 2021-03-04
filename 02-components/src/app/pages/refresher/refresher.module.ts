import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { RefresherPageRoutingModule } from './refresher-routing.module';
import { RefresherPage } from './refresher.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        RefresherPageRoutingModule,
    ],
    declarations: [RefresherPage],
})
export class RefresherPageModule {}
