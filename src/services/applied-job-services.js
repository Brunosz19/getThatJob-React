import collectionClient from "./collection-client";

export async function createAppliedJob(data) {
  const { ...applied } = await collectionClient("/professional/jobs/applied", {
    body: data,
  });

  return applied;
}