import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function createJob(data) {
 const { token, ...job } = await collectionClient("/jobs", {
   body: data,
 });

 sessionStorage.setItem(tokenKey, token);
 return job;
}

export async function GetAppliedJobs(){
  const appliedJobs = await collectionClient("/professional/jobs/applied");
  return appliedJobs
}

export async function getJob(id) {
  const { ...job } = await collectionClient(`/jobs/${id}`);
 
  return job;
}

export async function getJobs() {
  const { ...job } = await collectionClient(`/jobs`);
 
  return job;
}
