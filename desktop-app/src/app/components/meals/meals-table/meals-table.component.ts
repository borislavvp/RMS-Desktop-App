import { Component, HostListener, OnInit } from '@angular/core';
import { Dummy_Meals } from 'src/app/models/meal.model';

@Component({
  selector: 'app-meals-table',
  templateUrl: './meals-table.component.html',
  styleUrls: ['./meals-table.component.scss']
})
export class MealsTableComponent implements OnInit {
  headers = ['Meal ID', 'Name', 'Description', 'Products', 'Price'];
  meals = Dummy_Meals;
  private columns = Object.keys(this.meals[0]);

  public getColumns = () => this.columns.filter(column => column !== 'img');
  
  public getMealsNumber = () => this.meals.length;

  public IsScreenBigger = () => innerHeight > 800 && innerWidth > 1450;

  constructor() { }
  
  public innerHeight: any;
  public innerWidth: any;

  page: number = 1;

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
  }
}
