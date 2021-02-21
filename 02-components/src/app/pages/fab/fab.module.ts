import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { FabPageRoutingModule } from './fab-routing.module';
import { FabPage } from './fab.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FabPageRoutingModule,
        ComponentsModule,
    ],
    declarations: [FabPage],
})
export class FabPageModule {}
