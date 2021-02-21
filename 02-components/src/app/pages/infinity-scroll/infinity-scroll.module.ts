import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { InfinityScrollPageRoutingModule } from './infinity-scroll-routing.module';
import { InfinityScrollPage } from './infinity-scroll.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InfinityScrollPageRoutingModule,
        ComponentsModule,
    ],
    declarations: [InfinityScrollPage],
})
export class InfinityScrollPageModule {}
