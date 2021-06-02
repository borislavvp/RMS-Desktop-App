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
      'https://localhost:44366/blob/get/'+ name,
      {responseType: 'text'}
    );
  }
}
