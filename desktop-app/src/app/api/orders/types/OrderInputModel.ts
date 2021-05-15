import { Meal } from "src/app/models/meal.model"
import { OrderStatus } from "src/app/models/order.model";

export interface OrderInputModel {
    Id :number,
    Products : Meal[],
    TotalPrice :number,
    Status : OrderStatus,
    FirstName : string ,
    LastName : string ,
    Phone:  string,
    Address: string,
    OrderDate:string
}