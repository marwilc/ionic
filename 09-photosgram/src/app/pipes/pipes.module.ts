import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImagePipe } from './image.pipe';

@NgModule({
    declarations: [ImagePipe],
    exports: [ImagePipe],
    imports: [CommonModule],
})
export class PipesModule {}
