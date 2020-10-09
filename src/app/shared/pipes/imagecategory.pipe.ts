import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagecategory'
})
export class ImagecategoryPipe implements PipeTransform {

  transform(image: string): string {
    if (image) {
      return `http://localhost:3000/api/upload/category/${image}`;
    } else {
      return '../../../assets/img/noimage.jpg';
    }
  }
}