import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CandidatesComponent from "../components/candidates-component";
import JobPostingComponent from "../components/job-posting-component";
import { getJob } from "../services/job-services";

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

export default function JobPostingDetails() {
  const [job, setJob] = useState();
  const { id } = useParams();

  useEffect(() => {
    getJob(id).then(setJob).catch(console.log);
  }, []);
  return (
    <div>
      <ApplicationsTitle>Show Job Postings</ApplicationsTitle>
      <JobPostingComponent job={job} />
      <ApplicationsTitle>5 candidates found</ApplicationsTitle>
      <div>
        <ApplicationFilterTitle>
          FILTER YOUR JOB POSTINGS
        </ApplicationFilterTitle>
        <ApplicationFilterConteiner>
          <StyledRadio type="checkbox" />
          <ApplicationText style={{ color: "#616161" }}>ALL</ApplicationText>
          <StyledRadio type="checkbox" />
          <ApplicationText style={{ color: "#616161" }}>
            Waiting
          </ApplicationText>
          <StyledRadio type="checkbox" />
          <ApplicationText style={{ color: "#616161" }}>
            In progress
          </ApplicationText>
          <StyledRadio type="checkbox" />
          <ApplicationText style={{ color: "#616161" }}>
            Finished
          </ApplicationText>
        </ApplicationFilterConteiner>
        <ApplicationsFound style={{ marginTop: "16px" }}>
          4 job postings found
        </ApplicationsFound>
      </div>
      <CandidatesComponent />
    </div>
  );
}

//<JobPostingComponent/>
