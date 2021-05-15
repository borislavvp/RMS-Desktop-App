import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { OrderInputModel } from 'src/app/api/orders/types/OrderInputModel';
import { OrdersRepository } from 'src/app/api/orders/types/OrdersRepository';
import { Order, OrderStatus } from 'src/app/models/order.model';
import { OrderAvailableMessage } from '../socket/messages/server/OrderAvailableMessage';
import { OrderStatusChangeMessage } from '../socket/messages/server/OrderStatusChangeMessage';
import { SocketService } from '../socket/socket.service';
import { convertOrderFromInputModel } from './utils/convertOrderFromInputModel';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private _orders: Order[];
  public ordersChanged: Subject<Order[]>;
  public statusFilterChanged: Subject<OrderStatus>;
  public searchValueChanged: Subject<number>;
  
  constructor(socketService: SocketService,private _odersRepository:OrdersRepository) {
    this._orders = [];
    this.ordersChanged = new Subject();
    this.statusFilterChanged = new Subject();
    this.searchValueChanged = new Subject();
    socketService.on.OrderAvailable = this.OrderAvailableHandler;
    socketService.on.OrderStatusChange = this.OrderStatusChangeHandler;
    this.initializeTodaysOrders().catch(() => { });
  }

  private OrderAvailableHandler = ({ payload }: OrderAvailableMessage) => {
    this._orders.unshift(
      new Order(
        payload.orderNumber,
        payload.orderDate,
        payload.customerName,
        payload.location,
        payload.customerPhone,
        payload.amount,
        OrderStatus.New,
        payload.products
      )
    );
    this.ordersChanged.next(this._orders);
  }

  private OrderStatusChangeHandler = ({ payload }: OrderStatusChangeMessage) => {
    const order = this._orders.find(o => o.id === payload.orderNumber)
    if (order) {
      order.status = payload.orderStatus;
      this.ordersChanged.next(this._orders);
    }
  }

  get Orders() {
    return this._orders;
  }
  public getOrderById(orderNumber: number) {
    return this._orders.find(o => o.id === orderNumber);
  }
  public initializeTodaysOrders() {
    return new Promise<void>((resolve, reject) => {
      this._odersRepository.getTodaysOrders()
        .toPromise()
        .then(result => {
          this._orders = result.map(input => convertOrderFromInputModel(input));
          this.ordersChanged.next(this._orders);
          resolve();
        })
      .catch(() => reject())
    })
  }

  public changeOrderStatus(status:OrderStatus) {
    return new Promise<void>((resolve, reject) => {
      this._odersRepository.changeOrderStatus(status)
        .toPromise()
        .then(() => resolve())
        .catch(() => {reject()})
     })
  }

  public searchOrderById(orderNumber: number) {
    this.searchValueChanged.next(orderNumber);
  }

  public filterOrderByStatus(status: OrderStatus) {
    this.statusFilterChanged.next(status);
  }
}
