import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/models/meal.model';
import { identifierModuleUrl } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Meal[]> {
    return this.http.get<Meal[]>(
      'https://localhost:44366/products/get/'
    );
  }

  getById(id):Observable<Meal> {
    return this.http.get<Meal>(
      'https://localhost:44366/products/get/' + id
    );
  }

  Insert(formData: FormData) {
    return this.http.post(
      'https://localhost:44366/products/get/',
      formData
    );
    }

    Delete(id) {
      return this.http.delete(
        'https://localhost:44366/products/get/'+id
      );
  }

  Update(id,formData: FormData) {
    return this.http.put(
      'https://localhost:44366/products/get/'+id,
      formData
    );
    }
    
  }

