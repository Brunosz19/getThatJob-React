import { useState } from "react"
import * as S from "./styles"
import FilterCheckboxs from "./filters";
import JobCompany from "./JobCompany";
import JobInfo from "./JobInfo";
import JobStatus from "./JobStatus";
import ModalList from "../ModalList"

function ApplicationCard({appliedJobs}) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  function ExpandedButton() {
    setDetailsOpen(!detailsOpen);
  }

  return (
    <div>
      <S.ApplicationsTitle>Your Applications</S.ApplicationsTitle>
      <div>
        <FilterCheckboxs />
        <S.ApplicationsFound>
          {appliedJobs?.length} 1 applications found
        </S.ApplicationsFound>
        <S.ShadowBox>
          <S.InfoContainer>
            <JobCompany title={appliedJobs?.job.title}/>
            <JobInfo category={appliedJobs?.job.category} job_type={appliedJobs?.job.job_type} min_salary={appliedJobs?.job.min_salary} max_salary={appliedJobs?.job.max_salary}/>
            <JobStatus onClick={ExpandedButton} />
          </S.InfoContainer>
          <ModalList detailsOpen={detailsOpen} />
        </S.ShadowBox>
      </div>
    </div>
  );

}

export default ApplicationCard