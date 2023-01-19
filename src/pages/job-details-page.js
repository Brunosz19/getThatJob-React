import styled from "@emotion/styled";
import { IoIosArrowBack } from "react-icons/io";
import { RiFocus3Line, RiNavigationLine, RiBuilding3Line, RiCalendar2Line, RiMoneyDollarCircleLine } from "react-icons/ri"
import { AiOutlineClockCircle } from "react-icons/ai"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getJob } from "../services/job-services";
import { Link } from "react-router-dom";
import { getFollowings } from "../services/following-services";


const BackButton = styled("button")`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 1.25px;
    color: #616161;
    background-color: white;
    border: none;
    display: flex; 
    align-items: center;
    `;
    
const JobSubTitle = styled("h3")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #BF5F82;
    margin: 10px 0 16px;
`;
    
const ApplyButton = styled("button")`
    padding: 16px 24px;
    gap: 8px;
    width: 173px;
    height: 56px;
    background: #F48FB1;
    border-radius: 16px;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const JobTitle = styled("h1")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 59px;
`;

const JobCreateDate = styled("p")`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 1.5px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
`;
        
const JobData = styled("h4")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.15px;
`;


export default function JobDetails(){


    const navigate = useNavigate();
    const [job, setJob] = useState();
    const [followings, setFollowings] = useState();
    const { id } = useParams();

    function ApplicationJon(job){
      navigate(`/professional/job/application/${job.id}`)
    }

    useEffect(() => {
        getFollowings().then(setFollowings)
        getJob(id).then(setJob).catch(console.log)
    }, []);

    const isFollow = followings?.some(follows => follows.job_id === job?.id)

    return (
        <div>
            <Link to="/find-that-job" style={{textDecoration: "none"}}><BackButton><IoIosArrowBack/>BACK</BackButton></Link>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "80vw",}}>
                    <div style={{display: "flex"}}>
                        <img src={job?.company_info.logo} alt={job?.company_info.name} style={{boxShadow: "2px 3px 5px 4px rgba(0, 0, 0, 0.2)", borderRadius: "8px", marginRight: "20px", marginTop: "10px", width: "60px", height: "60px"}}></img>
                        <div>
                            <JobSubTitle style={{color: "#373737", marginBottom: "0",}}>{job?.company_info.name}</JobSubTitle>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <div style={{borderRadius: "50%", width: "20px", height: "20px", background: (isFollow) ? "#F48FB1" : "white", display: "flex", alignItems: "center", justifyContent: "center", color: (isFollow) ? "white" : "#616161",}}><RiFocus3Line/></div>
                                <BackButton>FOLLOWING</BackButton>
                            </div>
                        </div>
                    </div>
                    <ApplyButton onClick={()=>{ApplicationJon(job)}}><RiNavigationLine style={{width: "20px", height: "20px"}}/>APPLY NOW</ApplyButton>
                </div>
            </div>
            <section style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <JobTitle>{job?.title}</JobTitle>
                <JobCreateDate><AiOutlineClockCircle/>Posted 2 days ago</JobCreateDate>
                <div style={{display: "flex", gap: "32px",}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid #F48FB1", borderRadius: "8px"}}>
                        <JobData style={{paddingTop: "8px"}}>Category</JobData>
                        <JobSubTitle style={{color: "#373737", padding: "0 32px",}}><RiBuilding3Line style={{marginRight: "10px"}}/>{job?.category}</JobSubTitle>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid #F48FB1", borderRadius: "8px"}}>
                        <JobData style={{paddingTop: "8px"}}>Type</JobData>
                        <JobSubTitle style={{color: "#373737", padding: "0 32px",}}><RiCalendar2Line style={{marginRight: "10px"}}/>{job?.job_type}</JobSubTitle>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid #F48FB1", borderRadius: "8px"}}>
                        <JobData style={{paddingTop: "8px"}}>Salary</JobData>
                        <JobSubTitle style={{color: "#373737", padding: "0 32px", display: "flex", alignItems: "center",}}><RiMoneyDollarCircleLine style={{marginRight: "10px"}}/>{job?.min_salary} - {job?.max_salary}</JobSubTitle>
                    </div>
                </div>
                <div style={{width: "800px", marginTop: "30px"}}>
                    <JobSubTitle>About The company name SA</JobSubTitle>
                    <JobData>ABOUT THE COMPANY</JobData>
                    <JobSubTitle>About the job position</JobSubTitle>
                    <JobData>{job?.about}</JobData>
                    <JobSubTitle>Mandatory Requirements</JobSubTitle>
                    <JobData>{job?.requeriments}</JobData>
                    <JobSubTitle>Optional Requirements</JobSubTitle>
                    <JobData>{job?.opt_requeriments}</JobData>
                    <ApplyButton style={{marginTop: "10px"}} onClick={()=>{ApplicationJon(job)}}><RiNavigationLine style={{width: "20px", height: "20px"}}/>apply now</ApplyButton>
                </div>
            </section>
        </div>
    )
}