import { Component, HostListener, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/meal.model';

import { BlobService } from '../../../services/blobservices/blob.service';
import { ProductService } from '../../../services/productservice/product.service';
@Component({
  selector: 'app-meals-table',
  templateUrl: './meals-table.component.html',
  styleUrls: ['./meals-table.component.scss']
})
export class MealsTableComponent implements OnInit {
  headers = ['Name', 'Description', 'Products', 'Price', "Availability"];
  meals:Meal[] = [];
  loading: boolean = false;
  public getMealsNumber = () => this.meals.length;

  public IsScreenBigger = () => innerHeight > 800 && innerWidth > 1450;

  constructor(private blob:BlobService, private product: ProductService) {
   }
  
  public innerHeight: any;
  public innerWidth: any;

  page: number = 1;

  ngOnInit(): void {
    this.getProducts();
  }
  public getColumns = () => this.meals.length > 0 ? Object.keys(this.meals[0])
    .filter(column => column !== "id" && column !== 'image' && column !== "categoryId" && column !== "category" && column !== "image") : [];
  
  get IsLoading() {
    return this.loading;
  }
  
  public getProducts() {
    this.loading = true;
    this.product.getAll().subscribe(x => {
      this.meals = x;
      this.loading = false;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
  }
}
