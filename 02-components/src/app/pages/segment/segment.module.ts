import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SegmentPageRoutingModule } from './segment-routing.module';
import { SegmentPage } from './segment.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        PipesModule,
        SegmentPageRoutingModule,
    ],
    declarations: [SegmentPage],
})
export class SegmentPageModule {}
