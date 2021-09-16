import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
    name: 'image',
})
export class ImagePipe implements PipeTransform {
    transform(img: string, userId: string): string {
        return `${environment.url}/posts/images/${userId}/${img}`;
    }
}
