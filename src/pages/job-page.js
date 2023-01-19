import { useEffect, useState } from "react";
import { StyledSearchInput, Input, StyledLabel } from "../components/input";
import JobsList from "../components/JobsList";
import { getJobs } from "../services/professional-service";
import { FiSearch } from "react-icons/fi";

function JobPage() {
  const [jobData, setJobData] = useState();
  const [query, setQuery] = useState();
  const [categories, setCategories] = useState();
  const [type, setType] = useState();
  const [filter, setFilter] = useState("Select a category");
  const [filterType, setFilterType] = useState("Select a type");

  let jobs;
  if (query && (filter !== "Select a category") && (filterType !== "Select a type")) {
    jobs = jobData?.filter(
      (job) =>
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company_info.name.toLowerCase().includes(query.toLowerCase())
    );

    jobs = jobs.filter((job) => job.category === filter);
    jobs = jobs.filter((job) => job.job_type === filterType);
  } else if (query && (filter !== "Select a category")) {
    jobs = jobData?.filter(
      (job) =>
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company_info.name.toLowerCase().includes(query.toLowerCase())
    );

    jobs = jobs.filter((job) => job.category === filter);
  } else if (query && (filterType !== "Select a type")) {
    jobs = jobData?.filter(
      (job) =>
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company_info.name.toLowerCase().includes(query.toLowerCase())
    );

    jobs = jobs.filter((job) => job.job_type === filterType);
  } else if ((filter !== "Select a category") && (filterType !== "Select a type")) {
    jobs = jobData?.filter((job) => job.category === filter);

    jobs = jobs.filter((job) => job.job_type === filterType);
  } else if (query) {
    jobs = jobData?.filter(
      (job) =>
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company_info.name.toLowerCase().includes(query.toLowerCase())
    );
  } else if (filter !== "Select a category") {
    jobs = jobData?.filter((job) => job.category === filter);
  } else if (filterType !== "Select a type") {
    console.log("hola")
    jobs = jobData?.filter((job) => job.job_type === filterType);
  }

  useEffect(() => {
    getJobs()
      .then((data) => {
        setJobData(data);
        setCategories(data.map((job) => job.category).reduce((acc,item)=>{
          if(!acc.includes(item)){
            acc.push(item);
          }
          return acc;
        },[]));
        setType(data.map((job) => job.job_type).reduce((acc,item)=>{
          if(!acc.includes(item)){
            acc.push(item);
          }
          return acc;
        },[]));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ padding: "25px" }}>
      <h1>Find that Job</h1>
      {/* <FiSearch style={{position: "absolute"}} /> */}
      <Input
        type="query"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
        placeholder="manufacturing, sales, swim"
        label="Search by job title or company"
      />

      <div style={{ display: "flex", gap: "16px" }}>
        <div>
          <StyledLabel style={{ display: "flex" }} for="categories">
            Category
          </StyledLabel>
          <select
            style={{
              width: "280px",
              height: "36px",
              borderRadius: "8px",
              border: "1px solid #F48FB1",
            }}
            id="categories"
            value="categories"
            onChange={(event) => setFilter(event.target.value)}
          >
            <option value="" hidden>
              {filter}
            </option>
            {categories?.map((category) => (
              <option
                value={category}
                onClick={(event) => setFilter(event.target.value)}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <StyledLabel style={{ display: "flex" }} for="type">
            Type
          </StyledLabel>
          <select
            style={{
              width: "280px",
              height: "36px",
              borderRadius: "8px",
              border: "1px solid #F48FB1",
            }}
            id="type"
            value="type"
            onChange={(event) => setFilterType(event.target.value)}
          >
            <option value="" hidden>
              {filterType}
            </option>
            {type?.map((type) => (
              <option
                value={type}
                onClick={(event) => setFilterType(event.target.value)}
              >
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {query || (filter !== "Select a category") || (filterType !== "Select a type") ? (
        <JobsList props={jobs} />
      ) : (
        <JobsList props={jobData} />
      )}
    </div>
  );
}

export default JobPage;
