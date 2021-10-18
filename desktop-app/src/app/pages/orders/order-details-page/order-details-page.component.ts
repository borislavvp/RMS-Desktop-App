import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Meal } from 'src/app/models/meal.model';
import { Order, OrderStatus } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsPageComponent implements OnInit {
  page: number = 1;
  order: Order;
  constructor(private route: ActivatedRoute, private _ordersService: OrdersService) {
    this._ordersService.orderStatusChanged.subscribe((order) => this.order = order)
   }

  get OrderActionButtonColor() {
    switch (this.order.status) {
      case OrderStatus.New:
        return " hover:bg-orange-400 bg-orange-500"
      case OrderStatus.Preparing:
        return " hover:bg-green-500 bg-green-600"
      case OrderStatus.Prepared:
        return " bg-blue-600"
      case OrderStatus.Delivering:
        return " bg-yellow-800"
      case OrderStatus.Delivered:
        return " bg-gray-700"
      default:
        return " bg-red-500"
    } 
  }
  get OrderActionButtonTitle() {
    switch (this.order.status) {
      case OrderStatus.New:
        return "Order in Queue"
      case OrderStatus.Preparing:
        return "Preparing Order"
      case OrderStatus.Prepared:
        return "Order is Prepared"
      case OrderStatus.Delivering:
        return "Delivering Order"
      case OrderStatus.Delivered:
        return "Order is Delivered"
      default:
        return "Error"
    } 
  }
  get OrderActionButtonText() {
    switch (this.order.status) {
      case OrderStatus.New:
        return "Start Preparing"
      case OrderStatus.Preparing:
        return "Send for Delivery"
      default:
        return "Error"
    } 
  }
  get OrderActionButtonShouldHaveAction() {
    switch (this.order.status) {
      case OrderStatus.New:
        return true
      case OrderStatus.Preparing:
        return true
      case OrderStatus.Prepared:
        return false
      case OrderStatus.Delivering:
        return false
      case OrderStatus.Delivered:
        return false
      default:
        return false
    } 
  }

  get IsLoading() {
    return this._ordersService.fetching;
  }

  public changeOrderStatus() {
    this._ordersService.changeOrderStatus(
      this.order.id,
      this.order.status === OrderStatus.New ? OrderStatus.Preparing : OrderStatus.Prepared)
  }
  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
            this.order = this._ordersService.getOrderById(+params['id']);
          }
      );
  }

}
