import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string): string {
    if(image){
      return `http://localhost:3000/api/upload/product/${image}`;
    }else{
      return '../../../assets/img/noimage.jpg';
    }
  }

}
