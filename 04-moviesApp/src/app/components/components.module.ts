import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideShowParComponent } from './slide-show-par/slide-show-par.component';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster';

@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideShowParComponent,
  ],
  imports: [CommonModule, IonicModule, PipesModule],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideShowParComponent,
  ],
})
export class ComponentsModule {}
