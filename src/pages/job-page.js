import { useEffect, useState } from "react";
import { Input } from "../components/input";
import JobsList from "../components/JobsList";
import { getJobs } from "../services/professional-service";
import { useAuth } from "../context/auth-context"

function JobPage() {
  const [ jobData, setJobData ] = useState()
  const { user } = useAuth();

  // useEffect(()=>{
  //   getJobs().then((data) => setJobData(data)).catch((error) => console.log(error))
  // }, [])

  console.log(user)

  const jobs = [
    { title: 'The job title', job_type: 'full time', recruiter_id: 1, min_salary: '1000', max_salary: '5000' },
    { title: 'The job title', job_type: 'full time', recruiter_id: 1, min_salary: '1000', max_salary: '5000' },
    { title: 'The job title', job_type: 'full time', recruiter_id: 1, min_salary: '1000', max_salary: '5000' },
    { title: 'The job title', job_type: 'full time', recruiter_id: 1, min_salary: '1000', max_salary: '5000' },
    { title: 'The job title', job_type: 'full time', recruiter_id: 1, min_salary: '1000', max_salary: '5000' },
    { title: 'The job title', job_type: 'full time', recruiter_id: 2, min_salary: '1000', max_salary: '5000' },
    { title: 'The job title', job_type: 'full time', recruiter_id: 2, min_salary: '1000', max_salary: '5000' },
    { title: 'The job title', job_type: 'full time', recruiter_id: 2, min_salary: '1000', max_salary: '5000' },
    { title: 'The job title', job_type: 'full time', recruiter_id: 2, min_salary: '1000', max_salary: '5000' },
    { title: 'The job title', job_type: 'full time', recruiter_id: 2, min_salary: '1000', max_salary: '5000' }
  ]
  
  return (
    <>
      <h1>Find that Job</h1>
      <Input name="search"
      type="text"
      placeholder="manufacturing, sales, swim"
      label="Search by job title or company" />
      <Input name="search"
      type="text"
      placeholder="manufacturing, sales, swim"
      label="Search by job title or company" />
      <JobsList props={jobs} />
    </>
  );
}

export default JobPage;
