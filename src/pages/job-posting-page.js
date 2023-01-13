import styled from "@emotion/styled";
import { useState } from "react";
import LogoCompany from "../styles/img/LogoCompany.svg";


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

const ApplicationsSmLetter = styled("p")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.1px;
    color: #616161;
`;

const ApplicationsmmLetter = styled("p")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.1px;
    color: #616161;
`;

const ApplicationSubTitle = styled("h3")`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #BF5F82;
    margin: 10px 0 16px;
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

const DeclineButton = styled("button")`
    padding: 8px 16px;
    gap: 8px;
    width: 116px;
    height: 40px;
    background: #BF5F82;
    border-radius: 16px;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CVButton = styled("button")`
    width: 116px;
    height: 40px;
    border-radius: 16px;
    border: 1px solid  #F48FB1;
`;

export default function JobPosting(){

    const [detailsOpen, setDetailsOpen] = useState("none");

    function ExpandedButton(selected) {
        if (selected === detailsOpen) { return setDetailsOpen("none") }
        setDetailsOpen(selected)
    }

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
                <div style={{marginTop: "8px", marginBottom: "16px", boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)", border: "1px solid #E1E2E1", borderRadius: "8px"}}>
                    <div style={{display: "flex",  justifyContent: "space-between", height: "100%", widht: "100%", alignItems: "center", padding: "5px 10px"}}>
                        <div style={{display: "flex", alignItems: "center",}}>
                            <div>
                                <ApplicationsFound>The job title</ApplicationsFound>
                                <div style={{display: "flex",}}>
                                    <ApplicationsmmLetter style={{marginRight: "10px"}}>Manufactoring</ApplicationsmmLetter>
                                    <ApplicationsmmLetter style={{marginRight: "10px"}}>Full Time</ApplicationsmmLetter>
                                    <ApplicationsmmLetter>2.0k - 2.5k</ApplicationsmmLetter>
                                </div>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
                            <div style={{display: "flex",}}>
                                <ApplicationsmmLetter style={{width: "80px", textAlign: "center"}}>Open on 07/11/20</ApplicationsmmLetter>
                                <ApplicationsmmLetter style={{width: "80px", textAlign: "center"}}>Total Candidates</ApplicationsmmLetter>
                                <ApplicationsmmLetter style={{width: "80px", textAlign: "center", color: "#F48FB1"}}>Candidates on track</ApplicationsmmLetter>
                            </div>
                        </div>
                        <div style={{display: "flex"}}>
                            <div style={{display: "flex"}}>
                                <CVButton>SHOW</CVButton>
                                <DeclineButton>CLOSE</DeclineButton>
                            </div>
                            <button onClick={()=> {ExpandedButton("hola")}}>v</button>
                        </div>
                    </div>
                    <div style={{padding: "5px 10px", display: `${(detailsOpen === "hola") ? "flex" : "none"}`, flexDirection: "column"}}>
                        <ApplicationSubTitle>About the job position</ApplicationSubTitle>
                        <ApplicationText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat quam ut tempor maximus. Sed neque arcu, rhoncus elementum sodales a, tristique sed quam. Aliquam nibh velit, pharetra ac faucibus in, ornare eu tortor. Vestibulum lacus ligula, elementum sit amet purus ut, sagittis molestie ex. In hendrerit orci tellus. Integer pharetra porttitor nulla, nec fringilla dolor ultricies et. Integer accumsan feugiat urna, eu hendrerit dui varius sit amet. Mauris eget tristique turpis. Curabitur eget hendrerit turpis. Etiam rutrum dolor eu posuere vehicula.Pellentesque ut mauris neque. Maecenas posuere sit amet erat at placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Donec tempor lobortis nisl. Maecenas sit amet massa in tortor pulvinar sollicitudin. Fusce vitae feugiat felis, ut malesuada purus. Curabitur felis velit, interdum vitae viverra quis, sagittis ac nulla. Quisque tempus pharetra ornare. In sed nulla eget risus cursus facilisis vel quis nibh. Praesent euismod lectus a.</ApplicationText>
                        <ApplicationSubTitle>Mandatory Requirements</ApplicationSubTitle>
                        <ApplicationText>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ApplicationText>
                        <ApplicationText>- Aenean aliquam turpis eget egestas porta.</ApplicationText>
                        <ApplicationText>- Quisque tristique nunc ut sem pretium bibendum.</ApplicationText>
                        <ApplicationText>- Phasellus sit amet turpis laoreet, mattis elit ut, luctus ligula.</ApplicationText>
                        <ApplicationText>- Nullam blandit arcu eget justo hendrerit finibus.</ApplicationText>
                        <ApplicationSubTitle>Optional Requirements</ApplicationSubTitle>
                        <ApplicationText>- Maecenas vel metus imperdiet, malesuada dolor a, pulvinar tellus.</ApplicationText>
                        <ApplicationText>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ApplicationText>
                    </div>
                </div>
            </div>
        </div>
    )
}