import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll():Observable<Category[]> {
    return this.http.get<Category[]>(
      'https://localhost:44366/api/categories/getAll/'
    );
  }
}
