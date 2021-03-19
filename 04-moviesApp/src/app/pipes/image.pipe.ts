import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(image: string, size: string = 'w500'): string {
    if (!image) {
      return 'assets/no-image-banner.jpg';
    }

    return `${URL}/${size}${image}`;
  }
}
