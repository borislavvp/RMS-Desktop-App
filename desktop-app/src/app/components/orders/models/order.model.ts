export enum OrderStatus{
    New = "New",
    Preparing = "Preparing",
    Delivering = "Delivering",
    Delivered = "Delivered"
}

export class Order{
    constructor(public id: number, public date: string, public customerName: string, public location: string,public amount:number, public status:OrderStatus){}
}