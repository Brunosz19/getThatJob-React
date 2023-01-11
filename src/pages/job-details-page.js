import styled from "@emotion/styled";
import LogoCompany from "../styles/img/LogoCompany.svg";
import { IoIosArrowBack } from "react-icons/io";
import { RiFocus3Line, RiNavigationLine, RiBuilding3Line, RiCalendar2Line, RiMoneyDollarCircleLine } from "react-icons/ri"
import { AiOutlineClockCircle } from "react-icons/ai"

export default function JobDetails(){

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

    return (
        <div>
            <BackButton><IoIosArrowBack/>BACK</BackButton>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "80vw",}}>
                    <div style={{display: "flex"}}>
                        <img src={LogoCompany} style={{boxShadow: "2px 3px 5px 4px rgba(0, 0, 0, 0.2)", borderRadius: "8px", marginRight: "20px", marginTop: "10px"}}></img>
                        <div>
                            <JobSubTitle style={{color: "#373737", marginBottom: "0",}}>The company name SA</JobSubTitle>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <div style={{borderRadius: "50%", width: "20px", height: "20px", background: "#F48FB1", display: "flex", alignItems: "center", justifyContent: "center", color: "white",}}><RiFocus3Line/></div>
                                <BackButton>FOLLOWING</BackButton>
                            </div>
                        </div>
                    </div>
                    <ApplyButton><RiNavigationLine style={{width: "20px", height: "20px"}}/>APPLY NOW</ApplyButton>
                </div>
            </div>
            <section style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <JobTitle>The Job Title</JobTitle>
                <JobCreateDate><AiOutlineClockCircle/>Posted 2 days ago</JobCreateDate>
                <div style={{display: "flex", gap: "32px",}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid #F48FB1", borderRadius: "8px"}}>
                        <JobData style={{paddingTop: "8px"}}>Category</JobData>
                        <JobSubTitle style={{color: "#373737", padding: "0 32px",}}><RiBuilding3Line style={{marginRight: "10px"}}/>Manufacturing</JobSubTitle>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid #F48FB1", borderRadius: "8px"}}>
                        <JobData style={{paddingTop: "8px"}}>Type</JobData>
                        <JobSubTitle style={{color: "#373737", padding: "0 32px",}}><RiCalendar2Line style={{marginRight: "10px"}}/>Full time</JobSubTitle>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid #F48FB1", borderRadius: "8px"}}>
                        <JobData style={{paddingTop: "8px"}}>Salary</JobData>
                        <JobSubTitle style={{color: "#373737", padding: "0 32px", display: "flex", alignItems: "center",}}><RiMoneyDollarCircleLine style={{marginRight: "10px"}}/>2,000 - 2,500</JobSubTitle>
                    </div>
                </div>
                <div style={{width: "800px", marginTop: "30px"}}>
                    <JobSubTitle>About The company name SA</JobSubTitle>
                    <JobData>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta nunc viverra velit tincidunt, non vehicula augue vehicula. Donec viverra luctus nisl, sed vehicula ligula. Vivamus maximus metus a magna fermentum ullamcorper. Phasellus ultrices vestibulum ligula ut pellentesque. Quisque quis congue quam. Nunc porttitor risus lorem, in blandit augue iaculis vitae. Cras sit amet fringilla neque. Fusce ac elit ut quam ultrices bibendum. Curabitur vitae dignissim quam. Suspendisse aliquet massa id orci volutpat ullamcorper. Nunc at ante sem. Etiam elementum, mi eget aliquam lobortis, elit libero tempus ex, vel pretium nisi risus ac augue.</JobData>
                    <JobSubTitle>About the job position</JobSubTitle>
                    <JobData>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam fringilla, luctus lectus dictum, volutpat lacus. Vivamus lacinia felis ut mauris lacinia elementum. Sed faucibus dapibus egestas. Etiam dolor neque, posuere at purus cursus, molestie eleifend lacus. Aenean eu diam eu enim commodo accumsan ut sit amet odio. Nam maximus varius leo, et porttitor ante sodales ut. Pellentesque euismod commodo nunc ut tincidunt. Sed fringilla nunc leo, a euismod ipsum aliquet placerat. Integer suscipit semper mi, sit amet mollis augue mollis in. Proin vestibulum accumsan elit, id pellentesque diam fermentum eget. Aliquam mattis quis quam ut faucibus. Duis finibus nulla nec enim eleifend dapibus.</JobData>
                    <JobSubTitle>Mandatory Requirements</JobSubTitle>
                    <ul>
                        <JobData>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</JobData>
                        <JobData>- Aenean aliquam turpis eget egestas porta.</JobData>
                        <JobData>- Quisque tristique nunc ut sem pretium bibendum.</JobData>
                        <JobData>- Phasellus sit amet turpis laoreet, mattis elit ut, luctus ligula.</JobData>
                        <JobData>- Nullam blandit arcu eget justo hendrerit finibus.</JobData>
                    </ul>
                    <JobSubTitle>Optional Requirements</JobSubTitle>
                    <ul>
                        <JobData>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</JobData>
                        <JobData>- Maecenas vel metus imperdiet, malesuada dolor a, pulvinar tellus.</JobData>
                    </ul>
                    <ApplyButton style={{marginTop: "10px"}}><RiNavigationLine style={{width: "20px", height: "20px"}}/>apply now</ApplyButton>
                </div>
            </section>
        </div>
    )
}