import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function createUser(userData) {
  const { token, ...user } = await collectionClient("/users", {
    body: userData,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function getUser() {
  const { token, ...user } = await collectionClient("/profile");

  return user;
}

export async function updateUser(userData) {
  const { token, ...user } = await collectionClient("/profile", {
    method: "PATCH",
    body: userData,
  });

  return user;
}

export async function createOrder(orderData) {
  const { token, ...orders } = await collectionClient("/orders", {
    body: orderData,
  });

  sessionStorage.setItem(tokenKey, token);
  return orders;
}

export async function getOrders() {
  const { token, ...orders } = await collectionClient("/orders");

  return orders;
}
