import { Component, OnInit } from '@angular/core';
import { Dummy_Meals } from 'src/app/models/meal.model';

@Component({
  selector: 'app-order-meals-table',
  templateUrl: './order-meals-table.component.html',
  styleUrls: ['./order-meals-table.component.scss']
})
export class OrderMealsTableComponent implements OnInit {
  page: number = 1;
  headers = ['Meal ID', 'Name', 'Description', 'Products', 'Price'];
  meals = Dummy_Meals;
  private columns = Object.keys(this.meals[0]);

  public getColumns = () => this.columns.filter(column => column !== 'img');
  
  public getMealsNumber = () => this.meals.length;
  constructor() { }

  ngOnInit(): void {
  }

}