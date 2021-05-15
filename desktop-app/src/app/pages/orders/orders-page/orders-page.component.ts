import { Component, HostListener, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {
  page: number = 1;
  numberOfOrders: number = 0;
  numberOfOrdersVisible: number = 0;
  innerHeight: any;
  innerWidth: any;

  constructor(ordersService: OrdersService) {
    ordersService.ordersChanged.subscribe(orders => {
      this.numberOfOrders = orders.length;
      this.numberOfOrdersVisible = this.OrdersPerPage * this.page > orders.length ? orders.length : this.OrdersPerPage * this.page;
    })
}
  
  public IsScreenBigger = () => innerHeight > 800 && innerWidth > 1450;
  
  get OrdersPerPage() {
    return this.IsScreenBigger() ? 10 : 7;
  }
  ngOnInit(): void {
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
  }

}
