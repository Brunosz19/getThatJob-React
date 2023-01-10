import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function login(credentials, type) {
  const { token, ...user } = await collectionClient(`/${type}/login`, {
    body: credentials,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout(type) {
  await collectionClient(`/${type}/login`, {
    method: "DELETE",
  });

  sessionStorage.removeItem(tokenKey);
}
