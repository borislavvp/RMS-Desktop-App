import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Meal } from 'src/app/models/meal.model';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsPageComponent implements OnInit {
  page: number = 1;
  orderId: number;
  headers = ['Meal ID', 'Name', 'Description', 'Products', 'Price'];
  meals = [];
  private columns = Object.keys(this.meals[0]);

  public getColumns = () => this.columns.filter(column => column !== 'img');
  
  public getMealsNumber = () => this.meals.length;
  constructor(
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        async (params: Params) => {
          
            this.orderId = +params['id'];
          }
      );
  }

}
