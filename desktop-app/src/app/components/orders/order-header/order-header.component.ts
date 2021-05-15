import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
})
export class OrderHeaderComponent implements OnInit {
  orderNumber: number;
  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
  }

  filterOrder(searchValue:number) {
    this.orderNumber = searchValue;
    this.ordersService.filterOrderById(this.orderNumber);
  }
}
