import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/models/meal.model';
import { identifierModuleUrl } from '@angular/compiler';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Meal[]> {
    return this.http.get<Meal[]>(
      `${environment.PRODUCTS_MICROSERVICE}/products/getAll/`
    );
  }

  getById(id):Observable<Meal> {
    return this.http.get<Meal>(
      `${environment.PRODUCTS_MICROSERVICE}/products/getbyid/` + id
    );
  }

  Insert(formData) {
    return this.http.post(
      `${environment.PRODUCTS_MICROSERVICE}/products/insert`,
      formData
    ).subscribe();
    }

    Delete(id) {
      return this.http.delete(
        `${environment.PRODUCTS_MICROSERVICE}/products/delete/`+id
      );
  }

  Update(formData: FormData) {
    return this.http.post(
      `${environment.PRODUCTS_MICROSERVICE}/products/update`,
      formData
    ).subscribe();
    }
    
  }

