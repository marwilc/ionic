import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster';

@NgModule({
  declarations: [SlideshowBackdropComponent, SlideshowPosterComponent],
  imports: [CommonModule, IonicModule, PipesModule],
  exports: [SlideshowBackdropComponent, SlideshowPosterComponent],
})
export class ComponentsModule {}
