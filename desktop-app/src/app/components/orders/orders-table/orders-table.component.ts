import { Component, HostListener, Input, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { Order} from '../../../models/order.model';
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent implements OnInit {
  @Input() page: number;
  @Input() itemsPerPage: number;
  orders: Order[] = [];
  headers = ['Order ID', 'Date', 'Customer Name', 'Location', 'Phone', 'Amount', 'Status'];
  
  constructor(ordersService: OrdersService) {
    ordersService.ordersChanged.subscribe(orders => {
      this.orders = orders;
    })
    this.orders = ordersService.Orders;
   }
  
  public getColumns = () => this.orders.length > 0 ? Object.keys(this.orders[0]).filter(column => column !== 'products') : [];
  
  ngOnInit(): void {

  }

}
