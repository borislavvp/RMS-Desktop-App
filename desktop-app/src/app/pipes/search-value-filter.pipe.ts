import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order.model';

@Pipe({
  name: 'searchValueFilter'
})
export class SearchValueFilterPipe implements PipeTransform {

  transform(value: Order[], sarchValue:number): Order[] {
    return sarchValue !== null ? value.filter(o => `${o.id}`.includes(`${sarchValue}`)) :value;
  }

}
