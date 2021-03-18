import { Pipe, PipeTransform } from '@angular/core';

const URL = 'https://image.tmdb.org/t/p';

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
