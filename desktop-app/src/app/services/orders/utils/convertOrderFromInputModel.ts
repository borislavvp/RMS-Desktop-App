import { OrderInputModel } from "src/app/api/orders/types/OrderInputModel";
import { Order } from "src/app/models/order.model";

export const convertOrderFromInputModel = (input: OrderInputModel) => {
    return new Order(input.Id, input.OrderDate, `${input.FirstName} ${input.LastName}`, input.Address, input.Phone, input.TotalPrice, input.Status, input.Products);
}