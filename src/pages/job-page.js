import { Input } from "../components/input";
import JobCard from "../components/JobCard";

function JobPage() {

  
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
    </>
  );
}

export default JobPage;
