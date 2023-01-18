import styled from "@emotion/styled";
import CandidatesComponent from "../components/candidates-component";
import JobPostingComponent from "../components/job-posting-component";

const ApplicationFilterTitle = styled("p")`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    margin-top: 24px;
    letter-spacing: 1.5px;
`;

const ApplicationsTitle = styled("h1")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.25px;
`;

const ApplicationFilterConteiner = styled("div")`
    display: flex;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 1.5px;
`;

const ApplicationsFound = styled("h2")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
`;


const ApplicationText = styled("p")`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    margin-right: 10px;
`;

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

export default function JobPostingDetails() {
    return (
        <div>
            <ApplicationsTitle>Job Postings</ApplicationsTitle>
            <JobPostingComponent/>
            <ApplicationsTitle>5 candidates found</ApplicationsTitle>
            <div>
                <ApplicationFilterTitle>FILTER YOUR JOB POSTINGS</ApplicationFilterTitle>
                <ApplicationFilterConteiner>
                    <RadioButton/>
                    <ApplicationText style={{color: "#616161"}}>ALL</ApplicationText>
                    <RadioButton/>
                    <ApplicationText style={{color: "#616161"}}>Waiting</ApplicationText>
                    <RadioButton/>
                    <ApplicationText style={{color: "#616161"}}>In progress</ApplicationText>
                    <RadioButton/>
                    <ApplicationText style={{color: "#616161"}}>Finished</ApplicationText>
                </ApplicationFilterConteiner>
                <ApplicationsFound style={{marginTop: "16px"}}>4 job postings found</ApplicationsFound>
            </div>
            <CandidatesComponent/>
        </div>
    )
}