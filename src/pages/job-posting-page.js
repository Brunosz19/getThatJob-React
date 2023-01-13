import styled from "@emotion/styled";
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


export default function JobPosting(){

    return (
        <div>
            <ApplicationsTitle>Job Postings</ApplicationsTitle>
            <div>
                <ApplicationFilterTitle>FILTER YOUR JOB POSTINGS</ApplicationFilterTitle>
                <ApplicationFilterConteiner>
                    <input type="checkbox"/>
                    <ApplicationText style={{color: "#616161"}}>ALL</ApplicationText>
                    <input type="checkbox"/>
                    <ApplicationText style={{color: "#616161"}}>Whit candidates on track</ApplicationText>
                    <input type="checkbox"/>
                    <ApplicationText style={{color: "#616161"}}>Closed</ApplicationText>
                </ApplicationFilterConteiner>
                <ApplicationsFound style={{marginTop: "16px"}}>4 job postings found</ApplicationsFound>
            </div>
            <JobPostingComponent/>
        </div>
    )
}