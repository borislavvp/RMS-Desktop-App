import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OrderStatus } from "src/app/models/order.model";
import { OrdersServiceEndpoints } from "./OrdersEndpoints";
import { OrdersRepository } from "./types/OrdersRepository";
import { OrderInputModel } from "./types/OrderInputModel";

@Injectable({
  providedIn: 'root'
})
export class OrdersRepositoryImplementation extends OrdersRepository {
    constructor(private httpClient: HttpClient) { super(); }
    public getTodaysOrders = (): Observable<OrderInputModel[]> => {
        return this.httpClient.get<OrderInputModel[]>(OrdersServiceEndpoints.getTodaysOrders);
    };
    public changeOrderStatus = (orderNumber:number,status:OrderStatus) : Observable<ArrayBuffer> => {
        return this.httpClient.patch<ArrayBuffer>(OrdersServiceEndpoints.changeOrderStatus, { Id: orderNumber, Status: this.mapOrderStatusToRequestValue(status) });
    };
    
    private mapOrderStatusToRequestValue(status:OrderStatus):number {
        switch (status) {
            case OrderStatus.New:
                return 1;
            case OrderStatus.Preparing:
                return 2;
            case OrderStatus.Prepared:
                return 3;
            case OrderStatus.Delivering:
                return 4;
            case OrderStatus.Delivered:
                return 5;
            default:
                return -1;
        }
    }
}