import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
})
export class OrderDetailsPageComponent implements OnInit {
  orderId: number;
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
