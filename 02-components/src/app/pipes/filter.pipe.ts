import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(array: any[], text: string = '', field: string): any[] {
        if (text === '' || !array) {
            return array;
        }

        text = text.toLowerCase();
        return array.filter((item) =>
            item[field].toLowerCase().includes(text)
        );
    }
}
