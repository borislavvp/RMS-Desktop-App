import { Meal } from "./meal.model";


export enum OrderStatus{
    New = "New",
    Preparing = "Preparing",
    Delivering = "Delivering",
    Delivered = "Delivered"
}

export class Order{
    constructor(public id: number, public date: string, public customerName: string, public location: string,public amount:number, public status:OrderStatus,public meals:Meal[]){}
}
var Dummy_Meals = [];
export const Dummy_Orders = [
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivered,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivered,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivered,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivered,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivered,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Delivering,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.Preparing,Dummy_Meals),
    new Order(1,new Date().toDateString(),"boby","Bomanshof 131",19,OrderStatus.New,Dummy_Meals),
  ];