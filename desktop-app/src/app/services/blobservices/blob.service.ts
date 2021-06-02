import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlobService {

  constructor(private http: HttpClient) { }

  getImage(name) {
    return this.http.get(
      'https://localhost:44366/api/blob/get/'+ name,
      {responseType: 'text'}
    );
  }

  DeleteImage(name){
    return this.http.delete(
      'https://localhost:44366/api/blob/delete/'+ name
    );
  }
  
  UploadImage(formData: FormData) {
    return this.http.post(
      'https://localhost:44366/api/blob/upload/',
      formData
    );
  }
}
