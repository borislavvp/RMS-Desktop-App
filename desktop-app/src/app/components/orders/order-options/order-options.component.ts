import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { Order, OrderStatus } from '../../../models/order.model';

@Component({
  selector: 'app-order-options',
  templateUrl: './order-options.component.html',
})
export class OrderOptionsComponent implements OnInit {
  @Input() order: Order;

  constructor(private ordersService:OrdersService,private toastr:ToastrService) { }

  public get OrderStatus(): typeof OrderStatus{
    return OrderStatus;
  }

  private stopEventPropagation = ($event: MouseEvent) => {
    $event.stopPropagation();
    $event.preventDefault();
  }

  prepareOrder = ($event:MouseEvent) => {
    this.stopEventPropagation($event);
    this.ordersService.changeOrderStatus(OrderStatus.Preparing)
      .then(() => this.toastr.success("Successfully changed the order status to 'Preparing'!"))
      .catch(() => this.toastr.error("Something went wrong, please try again!"))
  }

  sendForDelivery = ($event:MouseEvent) => {
    this.stopEventPropagation($event);
    this.ordersService.changeOrderStatus(OrderStatus.Prepared)
      .then(() => this.toastr.success("Successfully changed the order status to 'Prepared'!"))
      .catch(() => this.toastr.error("Something went wrong, please try again!"));
  }

  ngOnInit(): void {
  }

}
