import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SearchBarPageRoutingModule } from './search-bar-routing.module';
import { SearchBarPage } from './search-bar.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        SearchBarPageRoutingModule,
    ],
    declarations: [SearchBarPage],
})
export class SearchBarPageModule {}
