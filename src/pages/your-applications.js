import { useEffect, useState } from "react";
import ApplicationCard from "../components/ApplicationCard";
import { GetAppliedJobs } from "../services/job-services";

export default function YourApplications() {
  const [appliedJobs, setAppliedJobs] = useState(null)
  useEffect(() => {
    GetAppliedJobs().then(setAppliedJobs).catch(console.log)
  }, []);
  return <ApplicationCard appliedJobs={appliedJobs?.at(0)}/>
}