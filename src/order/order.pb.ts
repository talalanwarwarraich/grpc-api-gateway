/* eslint-disable */

export const protobufPackage = "order";

export interface CreateOrderRequest {
  productId: number;
  quantity: number;
  userId: number;
}

export interface CreateOrderResponse {
  status: number;
  error: string[];
  id: number;
}

export const ORDER_PACKAGE_NAME = "order";
