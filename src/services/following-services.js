import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function getFollowings() {
    const data = await collectionClient(`/professional/job`);
    return data;
}