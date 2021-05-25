import { OrderStatus } from "src/app/models/order.model";
import { OrderProduct } from "src/app/models/orderProduct.model";

export interface OrderInputModel {
    id :number,
    products : OrderProduct[],
    totalPrice :number,
    status : OrderStatus,
    firstName : string ,
    lastName : string ,
    phone:  string,
    address: string,
    createdAt:string
}