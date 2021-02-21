import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { DatetimePageRoutingModule } from './datetime-routing.module';
import { DatetimePage } from './datetime.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DatetimePageRoutingModule,
        ComponentsModule,
    ],
    declarations: [DatetimePage],
})
export class DatetimePageModule {}
