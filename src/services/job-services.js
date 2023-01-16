import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function createJob(data) {
 const { token, ...job } = await collectionClient("/jobs", {
   body: data,
 });

 sessionStorage.setItem(tokenKey, token);
 return job;
}
