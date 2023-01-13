import styled from "@emotion/styled";
import JobPostingComponent from "../components/job-posting-component";

const ApplicationsTitle = styled("h1")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.25px;
`;

export default function JobPostingDetails() {
    return (
        <div>
            <ApplicationsTitle>Job Postings</ApplicationsTitle>
            <JobPostingComponent/>
        </div>
    )
}