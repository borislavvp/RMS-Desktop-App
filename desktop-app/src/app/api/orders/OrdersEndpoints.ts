import { environment } from "src/environments/environment";

const baseEndpoint = environment.ORDERS_MICROSERVICE;

export const OrdersServiceEndpoints = {
    changeOrderStatus: `${baseEndpoint}`,
    getTodaysOrders: `${baseEndpoint}/today`
};