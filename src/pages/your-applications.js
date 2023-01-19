import { useEffect, useState } from "react";
// import ApplicationCard from "../components/ApplicationCard";
import { GetAppliedJobs } from "../services/job-services";
import FilterCheckboxs from "../components/ApplicationCard/filters";
import styled from "@emotion/styled";
import ApplicationList from "../components/ApplicationList";

const ApplicationsTitle = styled("h1")`
font-family: "Montserrat";
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 41px;
letter-spacing: 0.25px;
`;

const ApplicationsFound = styled("h2")`
font-family: "Montserrat";
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 28px;
margin-top: 16px
`;

export default function YourApplications() {
  const [appliedJobs, setAppliedJobs] = useState(null)
  useEffect(() => {
    GetAppliedJobs().then(setAppliedJobs).catch(console.log)
  }, []);
  return (
    <>
    <ApplicationsTitle>Your Applications</ApplicationsTitle>
      <FilterCheckboxs />
      <ApplicationsFound>
        {appliedJobs?.length} applications found
      </ApplicationsFound>
  <ApplicationList props={appliedJobs}/>
  </>)
}

