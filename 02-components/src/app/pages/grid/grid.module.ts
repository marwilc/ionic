import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { GridPageRoutingModule } from './grid-routing.module';
import { GridPage } from './grid.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GridPageRoutingModule,
        ComponentsModule,
    ],
    declarations: [GridPage],
})
export class GridPageModule {}
