import { useState } from "react";
import * as S from "./styles";
// import FilterCheckboxs from "./filters";
import JobCompany from "./JobCompany";
import JobInfo from "./JobInfo";
import JobStatus from "./JobStatus";
import ModalList from "../ModalList";
import { format } from 'date-fns';

function ApplicationCard({ job, experience, why, status }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  function ExpandedButton() {
    setDetailsOpen(!detailsOpen);
  }

  const date = format(new Date(job?.created_at), 'dd/MM/yy')
  //const now = new Date().toLocaleDateString()
  //const parseNow =  format(new Date(now), 'dd/MM/yy')
  //console.log(parseNow)

  return (
    <div>
      <S.ShadowBox>
        <S.InfoContainer>
          <JobCompany title={job?.title} company_info={job?.company_info} />
          <JobInfo
            category={job?.category}
            job_type={job?.job_type}
            min_salary={job?.min_salary}
            max_salary={job?.max_salary}
            date={job?.created_at}
          />
          <JobStatus onClick={ExpandedButton} status={status} />
        </S.InfoContainer>
        <ModalList
          detailsOpen={detailsOpen}
          experience={experience}
          why={why}
          status={status}
        />
      </S.ShadowBox>
    </div>
  );
}

export default ApplicationCard;
