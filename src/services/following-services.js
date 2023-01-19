import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function getFollowings() {
    const data = await collectionClient(`/professional/job`);
    return data;
}

export async function createFollow(data) {
    const { ...follow } = await collectionClient("/professional/job", {
      body: data,
    });

    return follow;
}