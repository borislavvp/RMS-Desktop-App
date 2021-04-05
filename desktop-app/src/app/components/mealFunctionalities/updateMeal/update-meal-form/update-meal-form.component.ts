import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-meal-form',
  templateUrl: './update-meal-form.component.html',
  styleUrls: ['./update-meal-form.component.scss']
})
export class UpdateMealFormComponent implements OnInit {
  mealId: number;
  constructor(
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
     this.route.params
      .subscribe(
        async (params: Params) => {
          
            this.mealId = +params['id'];
          }
      );
  }

}
