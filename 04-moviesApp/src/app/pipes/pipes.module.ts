import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImagePipe } from './image.pipe';
import { ParPipe } from './par.pipe';

@NgModule({
  declarations: [ImagePipe, ParPipe],
  imports: [CommonModule],
  exports: [ImagePipe, ParPipe],
})
export class PipesModule {}
