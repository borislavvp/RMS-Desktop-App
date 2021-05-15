import { Pipe, PipeTransform } from '@angular/core';
import { Order, OrderStatus } from '../models/order.model';

@Pipe({
  name: 'ordersStatusFilter'
})
export class OrdersStatusFilterPipe implements PipeTransform {

  transform(value: Order[], status:OrderStatus): Order[] {
   return status !== null ? value.filter(o => o.status === status) : value;
  }

}
