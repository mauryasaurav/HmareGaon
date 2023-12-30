import { SERVER } from "../helpers";

export const listProductAPI = (data) => {
  return SERVER.get(`/products`);
};
