import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import JobPostingComponent from "../components/job-posting-component";
import { GetAppliedJobs } from "../services/job-services";
import { getJobs } from "../services/professional-service";

const ApplicationFilterTitle = styled("p")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin-top: 24px;
  letter-spacing: 1.5px;
`;

const ApplicationsTitle = styled("h1")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;
  letter-spacing: 0.25px;
`;

const ApplicationFilterConteiner = styled("div")`
  display: flex;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  gap: 5px;
`;

const ApplicationsFound = styled("h2")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

const ApplicationText = styled("p")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  margin-right: 10px;
`;

const StyledRadio = styled("input")`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin: 0;
  border: 2px solid #f48fb1;
  transition: 0.2s all linear;

  &:checked {
    border: 6px solid #f48fb1;
  }

  &:focus {
    color: #f48fb1;
  }

  &:active {
    background-color: white;
    color: black;
    outline: 1px solid black;
  }
`;

export default function JobPosting() {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    getJobs().then(setJobs).catch(console.log);
  }, []);

  return (
    <div>
      <ApplicationsTitle>Job Postings</ApplicationsTitle>
      <div>
        <ApplicationFilterTitle>
          FILTER YOUR JOB POSTINGS
        </ApplicationFilterTitle>
        <ApplicationFilterConteiner>
          <StyledRadio type="checkbox" />
          <ApplicationText style={{ color: "#616161" }}>ALL</ApplicationText>
          <StyledRadio type="checkbox" />
          <ApplicationText style={{ color: "#616161" }}>
            With candidates on track
          </ApplicationText>
          <StyledRadio type="checkbox" />
          <ApplicationText style={{ color: "#616161" }}>Closed</ApplicationText>
        </ApplicationFilterConteiner>
        <ApplicationsFound style={{ marginTop: "16px" }}>
          {jobs?.length} job postings found
        </ApplicationsFound>
      </div>
      {jobs?.map(function (job) {
        return <JobPostingComponent key={`${job.id}${job}`} job={job} />;
      })}
    </div>
  );
}
