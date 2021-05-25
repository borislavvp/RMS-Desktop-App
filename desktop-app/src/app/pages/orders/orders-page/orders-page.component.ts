import { Component, HostListener, OnInit } from '@angular/core';
import { Order, OrderStatus } from 'src/app/models/order.model';
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
  statusFilterApplied: OrderStatus;
  searchOrderValue: number;
  private visibleOrders: Order[];

  constructor(private _ordersService: OrdersService) {
    _ordersService.statusFilterChanged.subscribe((status) => {
      this.statusFilterApplied = status;
      this.changeOrdersPaginationInformation();
    });
    _ordersService.searchValueChanged.subscribe((value) => {
      this.searchOrderValue = value;
      this.changeOrdersPaginationInformation();
    });

    _ordersService.ordersChanged.subscribe(orders => {
      this.visibleOrders = orders;
      this.changeOrdersPaginationInformation();
    })
    
}
  
  private changeOrdersPaginationInformation = () => {
      const filteredById = this.searchOrderValue ? this.visibleOrders.filter(o => `${o.id}`.includes(`${this.searchOrderValue}`)) : this.visibleOrders;
      const filteredOrders = this.statusFilterApplied ? filteredById.filter(o => o.status === this.statusFilterApplied) : filteredById;

      this.numberOfOrders = filteredOrders.length;
      this.numberOfOrdersVisible = this.OrdersPerPage * this.page > filteredOrders.length ? filteredOrders.length : this.OrdersPerPage * this.page; 
  }

  public IsScreenBigger = () => innerHeight > 800 && innerWidth > 1450;

  get IsLoading() {
    return this._ordersService.fetching;
  }

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
