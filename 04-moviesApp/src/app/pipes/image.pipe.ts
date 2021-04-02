import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(image: string, size: string = 'w500', avatar?: boolean): string {
    if (!image) {
      return avatar ? 'assets/no-avatar.jpg' : 'assets/no-image-banner.jpg';
    }

    return `${URL}/${size}${image}`;
  }
}
