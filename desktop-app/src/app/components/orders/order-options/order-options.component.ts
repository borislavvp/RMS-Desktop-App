import { Component, Input, OnInit } from '@angular/core';
import { Order, OrderStatus } from '../../../models/order.model';

@Component({
  selector: 'app-order-options',
  templateUrl: './order-options.component.html',
})
export class OrderOptionsComponent implements OnInit {
  @Input() order: Order;
  public get OrderStatus(): typeof OrderStatus{
    return OrderStatus;
  }

  testClick = ($event:MouseEvent) => {
    $event.stopPropagation();
    $event.preventDefault();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
