import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
})
export class OrderOverviewComponent implements OnInit {
  @Input() order: Order;
  constructor() { }

  ngOnInit(): void {
  }

}
