import { Observable } from "rxjs";
import { OrderStatus } from "src/app/models/order.model";
import { OrderInputModel } from "./OrderInputModel";

export abstract class OrdersRepository{
    abstract getTodaysOrders: () => Observable<OrderInputModel[]>;
    abstract changeOrderStatus: (orderNumber:number,status: OrderStatus) => Observable<ArrayBuffer>;
}