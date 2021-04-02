import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/interfaces';

@Pipe({
  name: 'filterBackdrop',
})
export class FilterBackdropPipe implements PipeTransform {
  transform(movies: Movie[]): Movie[] {
    return movies.filter((m) => m.backdrop_path);
  }
}
