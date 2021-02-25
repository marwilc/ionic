import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { ListReorderPageRoutingModule } from './list-reorder-routing.module';
import { ListReorderPage } from './list-reorder.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        ListReorderPageRoutingModule,
    ],
    declarations: [ListReorderPage],
})
export class ListReorderPageModule {}
