import { OrderInputModel } from "src/app/api/orders/types/OrderInputModel";
import { Order } from "src/app/models/order.model";

export const convertOrderFromInputModel = (input: OrderInputModel) => {
    return new Order(input.id, input.createdAt, `${input.firstName} ${input.lastName}`,
        input.address, input.phone, input.totalPrice, input.status, input.products);
}