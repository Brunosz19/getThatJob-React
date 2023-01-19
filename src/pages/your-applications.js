import { useEffect, useState } from "react";
import ApplicationCard from "../components/ApplicationCard";
import { GetAppliedJobs } from "../services/job-services";
import styled from "@emotion/styled";

const RadioButton = styled.input`
  appearance: none;
  height: 18px;
  width: 18px;
  border: 1px solid palevioletred;
  border-radius: 8px;
  &:checked {
    height: 16px;
    width: 16px;
    background-color: palevioletred;
  }

  &:active,
  &:focus {
    outline: 1px solid palevioletred;
    outline-offset: 3px;
  }
`;

export default function YourApplications() {
  const [appliedJobs, setAppliedJobs] = useState(null)
  useEffect(() => {
    GetAppliedJobs().then(setAppliedJobs).catch(console.log)
  }, []);
  return <ApplicationCard appliedJobs={appliedJobs?.at(0)}/>
}

