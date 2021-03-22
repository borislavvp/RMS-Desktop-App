import { Component, Input, OnInit } from '@angular/core';
import { OrderStatus } from '../models/order.model';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
})
export class OrderStatusComponent implements OnInit {
  @Input() status: OrderStatus;
  public get OrderStatus(): typeof OrderStatus{
    return OrderStatus;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
