import { Component, OnInit } from '@angular/core';
import { OrderStatus } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-orders-status-filtering',
  templateUrl: './orders-status-filtering.component.html',
})
export class OrdersStatusFilteringComponent implements OnInit {

  currentFilter: string = null;

  constructor(private ordersService:OrdersService) { }

  public get OrderStatus(): typeof OrderStatus{
    return OrderStatus;
  }
  
  ngOnInit(): void {
  }

  get FilterAppliedColor() {
    switch (this.currentFilter) {
      case OrderStatus.New:
        return "text-orange-600"
      case OrderStatus.Preparing:
        return "text-green-600"
      case OrderStatus.Prepared:
        return "text-blue-600"
      case OrderStatus.Delivering:
        return "text-yellow-800"
      case OrderStatus.Delivered:
        return "text-gray-600"
      default:
        return "text-yellow-800"
    }
  }
  get FilterApplied() {
    return this.currentFilter !== null
      ? this.currentFilter === OrderStatus.Prepared
        ? "Waiting"
        : this.currentFilter
      : "All Status";
  }

  public isFilterApplied(status:OrderStatus) {
    return this.currentFilter === status;
  }
  public filterOrdersByStatus(status: OrderStatus) {
    this.currentFilter = status;
    this.ordersService.filterOrderByStatus(status)
  }

}
