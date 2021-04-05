import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/meal.model';

@Component({
  selector: 'app-meal-options',
  templateUrl: './meal-options.component.html',
})
export class MealOptionsComponent implements OnInit {
  @Input() meal: Meal;
  constructor() { }

  ngOnInit(): void {
  }

}
