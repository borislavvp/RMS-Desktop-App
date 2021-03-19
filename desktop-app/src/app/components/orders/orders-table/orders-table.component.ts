import { Component, OnInit } from '@angular/core';
import { Order, OrderStatus } from '../models/order.model';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
})
export class OrdersTableComponent implements OnInit {
  headers = ['Order ID', 'Date', 'Customer Name', 'Location', 'Amount', 'Status'];
  orders = [
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivered),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New),
  ];
  columns = Object.keys(this.orders[0]);
 
  constructor() { }

  ngOnInit(): void {
  }

}
