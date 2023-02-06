import { useEffect, useState } from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { Input, StyledLabel } from "../components/input";
import JobsList from "../components/JobsList";
import { getJobs } from "../services/professional-service";

function JobPage() {
  const [jobData, setJobData] = useState();
  const [query, setQuery] = useState();
  const [categories, setCategories] = useState();
  const [type, setType] = useState();
  const [range, setRange] = useState({
    minSalary: null,
    maxSalary: null,
  });
  const [categoryFilter, setCategoryFilter] = useState("Select a category");
  const [filterType, setFilterType] = useState("Select a type");

  const filteredJobs = jobData
    ?.filter((job) => {
      if (!query) return true;

      return (
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company_info.name.toLowerCase().includes(query.toLowerCase())
      );
    })
    .filter((job) => {
      if (categoryFilter === "Select a category" || categoryFilter === "all")
        return true;

      return job.category === categoryFilter;
    })
    .filter((job) => {
      if (filterType === "Select a type" || filterType === "all") return true;

      return job.job_type === filterType;
    })
    .filter((job) => {
      if (!range.minSalary && !range.maxSalary){
        return true;
      } else if (range.minSalary && !range.maxSalary){
        return job.min_salary >= range.minSalary
      } else if (!range.minSalary && range.maxSalary){
        return job.max_salary <= range.maxSalary
      } else {
        return job.min_salary >= range.minSalary && job.max_salary <= range.maxSalary
      }
    })

  useEffect(() => {
    getJobs()
      .then((data) => {
        setJobData(data);
        setCategories(
          data
            .map((job) => job.category)
            .reduce(
              (acc, item) => {
                if (!acc.includes(item)) {
                  acc.push(item);
                }
                return acc;
              },
              ["all"]
            )
        );
        setType(
          data
            .map((job) => job.job_type)
            .reduce((acc, item) => {
              if (!acc.includes(item)) {
                acc.push(item);
              }
              return acc;
            }, [])
        );
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ padding: "25px" }}>
      <h1>Find that Job</h1>
      <StyledLabel style={{ display: "flex" }} for="type">
        Search by job title or company
      </StyledLabel>
      <div style={{ display: "flex", alignItems: "center", height: "38px" }}>
        {!query ? (
          <FiSearch
            style={{
              position: "absolute",
              marginLeft: "10px",
            }}
          />
        ) : (
          <></>
        )}

        <Input
          type="query"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          placeholder="     manufacturing, sales, swim"
        />
      </div>

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
            onChange={(event) => setCategoryFilter(event.target.value)}
          >
            <option value="" hidden>
              {categoryFilter}
            </option>
            {categories?.map((category) => (
              <option
                value={category}
                onClick={(event) => setCategoryFilter(event.target.value)}
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
        <div>
          <StyledLabel style={{ display: "flex" }} for="type">
            salary range
          </StyledLabel>
          <div
            style={{ display: "flex", alignItems: "center", height: "38px" }}
          >
            {" "}
            <RiMoneyDollarCircleFill
              style={{
                position: "absolute",
                marginLeft: "10px",
              }}
            />
            <Input
              name="min_salary"
              type="number"
              value={range.minSalary}
              onChange={(event) =>
                setRange({ ...range, minSalary: event.target.value })
              }
              placeholder="min"
              width={"102px"}
              height={"36px"}
            />
            <h1 style={{ color: "#8E8E8E", margin: "0 8px" }}>-</h1>
            <RiMoneyDollarCircleFill
              style={{
                position: "absolute",
                marginLeft: "143px",
              }}
            />
            <Input
              name="max_salary"
              type="number"
              value={range.maxSalary}
              onChange={(event) =>
                setRange({ ...range, maxSalary: event.target.value })
              }
              placeholder="max"
              label=""
              width={"102px"}
              height={"36px"}
            />
          </div>
        </div>
      </div>

      <JobsList props={filteredJobs} />
    </div>
  );
}

export default JobPage;
