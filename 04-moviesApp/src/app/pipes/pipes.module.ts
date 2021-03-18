import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImagePipe } from './image.pipe';

@NgModule({
  declarations: [ImagePipe],
  imports: [CommonModule],
  exports: [ImagePipe],
})
export class PipesModule {}
