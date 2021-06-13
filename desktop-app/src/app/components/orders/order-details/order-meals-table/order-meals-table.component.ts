import { Component, Input, OnInit } from '@angular/core';
import { OrderProduct } from 'src/app/models/orderProduct.model';

@Component({
  selector: 'app-order-meals-table',
  templateUrl: './order-meals-table.component.html',
  styleUrls: ['./order-meals-table.component.scss']
})
export class OrderMealsTableComponent implements OnInit {
  @Input() orderProducts: OrderProduct[];
  page: number = 1;
  productsPerPage = 5;
  headers = ['Meal ID', 'Name', 'Ingredients', 'Price','Quantity'];

  public getColumns = () => this.orderProducts.length > 0 ?  Object.keys(this.orderProducts[0]).filter(column => column !== 'imageUrl') : [];
  
  public getProductsNumber = () => this.orderProducts.length;
  
  public  numberOfProductsVisible = () => this.productsPerPage * this.page > this.getProductsNumber() ? this.getProductsNumber() : this.productsPerPage * this.page;

  constructor() { }

  ngOnInit(): void {
  }

}
