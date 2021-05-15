import { OrderStatus } from "src/app/models/order.model";
import { Message } from "../Message";
import { ServerMessageType } from "./ServerMessageType";

interface OrderStatusChangePayload {
  orderNumber: number;
  orderStatus: OrderStatus
}

export class OrderStatusChangeMessage implements Message {
  type = ServerMessageType.ORDER_STATUS_CHANGE;
  payload: OrderStatusChangePayload;
  constructor(payload: OrderStatusChangePayload) {
    this.payload = payload;
  }
}
