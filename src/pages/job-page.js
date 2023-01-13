import { useEffect, useState } from "react";
import { Input } from "../components/input";
import JobsList from "../components/JobsList";
import { getJobs } from "../services/professional-service";

function JobPage() {
  const [jobData, setJobData] = useState();

  useEffect(() => {
    getJobs()
      .then(setJobData)
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1>Find that Job</h1>
      <Input
        name="search"
        type="text"
        placeholder="manufacturing, sales, swim"
        label="Search by job title or company"
      />
      <Input
        name="search"
        type="text"
        placeholder="manufacturing, sales, swim"
        label="Search by job title or company"
      />
      <JobsList props={jobData} />
    </>
  );
}

export default JobPage;
