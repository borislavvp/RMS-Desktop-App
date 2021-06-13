import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlobService {

  constructor(private http: HttpClient) { }

  getImage(name) {
    return this.http.get(
      `${environment.PRODUCTS_MICROSERVICE}/blob/get/`+ name,
      {responseType: 'text'}
    );
  }

  DeleteImage(name){
    return this.http.delete(
      `${environment.PRODUCTS_MICROSERVICE}/blob/delete/`+ name
    ).subscribe();
  }
  
  UploadImage(formData: FormData) {
    return this.http.post(
      `${environment.PRODUCTS_MICROSERVICE}/blob/upload`,
      formData
    ).subscribe();
  }
}
