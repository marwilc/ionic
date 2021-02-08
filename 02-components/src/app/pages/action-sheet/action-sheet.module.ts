import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { ActionSheetPageRoutingModule } from './action-sheet-routing.module';
import { ActionSheetPage } from './action-sheet.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ActionSheetPageRoutingModule,
        ComponentsModule,
    ],
    declarations: [ActionSheetPage],
})
export class ActionSheetPageModule {}
