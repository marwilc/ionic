import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NewComponent } from './new/new.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [NewsComponent, NewComponent],
  imports: [CommonModule, IonicModule],
  exports: [NewsComponent],
})
export class ComponentsModule {}
