import { AiOutlineArrowLeft } from "react-icons/ai";
import { RiFocus2Fill } from "react-icons/ri";
import styled from "@emotion/styled";
import JobsList from "../components/JobsList";

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 1rem;
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0.5rem;
`;

const jobs = [
  { title: 'The job title', job_type: 'full time', recruiter_id: 1, min_salary: '1000', max_salary: '5000' },
  { title: 'The job title', job_type: 'full time', recruiter_id: 1, min_salary: '1000', max_salary: '5000' },
  { title: 'The job title', job_type: 'full time', recruiter_id: 1, min_salary: '1000', max_salary: '5000' },
  { title: 'The job title', job_type: 'full time', recruiter_id: 1, min_salary: '1000', max_salary: '5000' },
  { title: 'The job title', job_type: 'full time', recruiter_id: 1, min_salary: '1000', max_salary: '5000' },
  { title: 'The job title', job_type: 'full time', recruiter_id: 2, min_salary: '1000', max_salary: '5000' },
  { title: 'The job title', job_type: 'full time', recruiter_id: 2, min_salary: '1000', max_salary: '5000' },
  { title: 'The job title', job_type: 'full time', recruiter_id: 2, min_salary: '1000', max_salary: '5000' },
  { title: 'The job title', job_type: 'full time', recruiter_id: 2, min_salary: '1000', max_salary: '5000' },
  { title: 'The job title', job_type: 'full time', recruiter_id: 2, min_salary: '1000', max_salary: '5000' }
]

function CompanyInfoPage() {
  return (
    <>
      <p>
        <AiOutlineArrowLeft />
        BACK
      </p>
      <HeaderInfo>
        <p>img</p>
        <CompanyInfo>
          <p>The company name SA</p>
          <p>
            <RiFocus2Fill /> Following
          </p>
        </CompanyInfo>
      </HeaderInfo>
      <p>2 Job Openings</p>
      <JobsList props={jobs} />
    </>
  );
}

export default CompanyInfoPage;
