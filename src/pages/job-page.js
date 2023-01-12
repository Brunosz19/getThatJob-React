import { Input } from "../components/input";
import JobsList from "../components/JobsList";

function JobPage() {
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
