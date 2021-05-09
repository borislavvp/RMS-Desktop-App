export const environment = {
  PRODUCTION: true,
  //TODO: To be changed when deployed
  IDENTITY_AUTHORITY: "https://localhost:5001",
  ORDER_MESSAGE_SERVICE:(token:string) => `ws://localhost:3333/authorization?token=${token}`,
};
