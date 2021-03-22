import { Component, HostListener, OnInit } from '@angular/core';
import { Order, OrderStatus } from '../../../models/order.model';
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent implements OnInit {
  orders = [
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivered,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivered,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivered,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivered,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivered,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,[]),
  ];
  headers = ['Order ID', 'Date', 'Customer Name', 'Location', 'Amount', 'Status'];
  
  private columns = Object.keys(this.orders[0]);
  
  public getColumns = () => this.columns.filter(column => column !== 'meals');
  
  public getOrdersNumber = () => this.orders.length;

  public innerHeight: any;
  page: number = 1;

  constructor() { }

  ngOnInit() {
      this.innerHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
    this.innerHeight = window.innerHeight;
  }

}
