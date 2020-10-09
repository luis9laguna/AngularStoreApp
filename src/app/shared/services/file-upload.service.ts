import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor() { }

  async UpdateFile(
    archives: File,
    type: 'products'|'categories',
    id: string

  ){

    try {

      const url = `${ base_url }/upload/${type}/${id}`;
      const formData = new FormData();
      formData.append('image', archives);

      const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'token': localStorage.getItem('token') || ''
        },
        body: formData
      });

      console.log(resp);
      

    }catch (err) {

    }

  }
}
