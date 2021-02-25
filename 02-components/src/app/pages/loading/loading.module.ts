import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { LoadingPageRoutingModule } from './loading-routing.module';
import { LoadingPage } from './loading.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        LoadingPageRoutingModule,
    ],
    declarations: [LoadingPage],
})
export class LoadingPageModule {}
