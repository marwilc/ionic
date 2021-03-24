import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { DetailComponent } from './detail/detail.component';
import { SlideShowParComponent } from './slide-show-par/slide-show-par.component';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster';

@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideShowParComponent,
    DetailComponent,
  ],
  imports: [CommonModule, IonicModule, PipesModule],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideShowParComponent,
    DetailComponent,
  ],
})
export class ComponentsModule {}
