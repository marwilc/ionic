import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterBackdropPipe } from './filter-backdrop.pipe';
import { ImagePipe } from './image.pipe';
import { ParPipe } from './par.pipe';

@NgModule({
  declarations: [ImagePipe, ParPipe, FilterBackdropPipe],
  imports: [CommonModule],
  exports: [ImagePipe, ParPipe, FilterBackdropPipe],
})
export class PipesModule {}
