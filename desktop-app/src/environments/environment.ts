// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  PRODUCTION: false,
  IDENTITY_AUTHORITY: "https://51.141.4.73/api/v1/identity",
  ORDER_MESSAGE_SERVICE: "wss://51.141.4.73/api/v1/orders-status-socket",
  ORDERS_MICROSERVICE: "https://51.141.4.73/api/v1/restaurant-gateway/api/orders",
  PRODUCTS_MICROSERVICE: "https://51.141.4.73/api/v1/restaurant-gateway/api/products"
};
// export const environment = {
//   PRODUCTION: false,
//   IDENTITY_AUTHORITY: "https://localhost:5001",
//   ORDER_MESSAGE_SERVICE: "ws://localhost:3333",
//   ORDERS_MICROSERVICE: "https://localhost:5050/orders/api",
//   PRODUCTS_MICROSERVICE: "https://localhost:5050/products/api"
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
