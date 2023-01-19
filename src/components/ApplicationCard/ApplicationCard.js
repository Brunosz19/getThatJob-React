import { useState } from "react";
import * as S from "./styles";
// import FilterCheckboxs from "./filters";
import JobCompany from "./JobCompany";
import JobInfo from "./JobInfo";
import JobStatus from "./JobStatus";
import ModalList from "../ModalList";

function ApplicationCard({
  title,
  category,
  job_type,
  min_salary,
  max_salary,
}) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  console.log(title);
  function ExpandedButton() {
    setDetailsOpen(!detailsOpen);
  }

  return (
    <div>
      <S.ShadowBox>
        <S.InfoContainer>
          <JobCompany title={title} />
          <JobInfo
            category={category}
            job_type={job_type}
            min_salary={min_salary}
            max_salary={max_salary}
          />
          <JobStatus onClick={ExpandedButton} />
        </S.InfoContainer>
        <ModalList detailsOpen={detailsOpen} />
      </S.ShadowBox>
      {/* </div> */}
    </div>
  );
}

export default ApplicationCard;
