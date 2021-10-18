import { OrderProduct } from "./orderProduct.model";

export enum OrderStatus{
    New = "New",
    Preparing = "Preparing",
    Prepared = "Prepared",
    Delivering = "Delivering",
    Delivered = "Delivered"
}

export class Order{
    constructor(public id: number, public date: string, public customerName: string, public location: string,public customerPhone: string ,
        public amount: number, public status: OrderStatus, public products: OrderProduct[]) { }
}
var Dummy_Meals = [];
export const Dummy_Orders = [
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Delivered,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Delivered,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Delivered,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Delivered,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Delivered,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Delivering,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.New,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.Preparing,[]),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131","08080808080",19,OrderStatus.New,[]),
  ];