import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Dummy_Orders} from '../../../models/order.model';
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent implements OnInit {
  @Input() page: number;
  orders = Dummy_Orders;
  headers = ['Order ID', 'Date', 'Customer Name', 'Location', 'Amount', 'Status'];
  
  private columns = Object.keys(this.orders[0]);
  
  public getColumns = () => this.columns.filter(column => column !== 'meals');
  
  public getOrdersNumber = () => this.orders.length;

  public IsScreenBigger = () => innerHeight > 800 && innerWidth > 1450;

  constructor() { }
  
  public innerHeight: any;
  public innerWidth: any;

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
  }

}
