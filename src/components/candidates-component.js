import styled from "@emotion/styled";
import { useState } from "react";

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
    width: 240px;
    height: 40px;
    border-radius: 16px;
    border: 1px solid  #F48FB1;
`;

export default function CandidatesComponent(){

    const [detailsOpen, setDetailsOpen] = useState("none");

    function ExpandedButton(selected) {
        if (selected === detailsOpen) { return setDetailsOpen("none") }
        setDetailsOpen(selected)
    }

    return (
        <div style={{marginTop: "8px", marginBottom: "16px", boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)", border: "1px solid #E1E2E1", borderRadius: "8px"}}>
            <div style={{display: "flex",  justifyContent: "space-between", height: "100%", widht: "100%", alignItems: "center", padding: "5px 10px"}}>
                <div style={{display: "flex", alignItems: "center",}}>
                    <div>
                        <ApplicationsFound>Ramon Valdés</ApplicationsFound>
                        <ApplicationsmmLetter style={{marginRight: "10px"}}>Mighty Piráte</ApplicationsmmLetter>
                    </div>
                </div>
                <div>
                        <ApplicationsmmLetter style={{width: "80px", textAlign: "center"}}>guy.brush@mail.com</ApplicationsmmLetter>
                        <ApplicationsmmLetter style={{width: "80px", textAlign: "center"}}>+333555777</ApplicationsmmLetter>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
                    <div style={{display: "flex",}}>
                        <ApplicationsmmLetter style={{width: "80px", textAlign: "center"}}>Sent 1 day ago</ApplicationsmmLetter>
                        <ApplicationsmmLetter style={{width: "80px", textAlign: "center", color: "#F48FB1"}}>Waiting for review</ApplicationsmmLetter>
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <CVButton>MARK AS STARTED</CVButton>
                    <button onClick={()=> {ExpandedButton("hola")}}>v</button>
                </div>
            </div>
            <div style={{padding: "5px 10px", display: `${(detailsOpen === "hola") ? "flex" : "none"}`, flexDirection: "column"}}>
                <ApplicationSubTitle>Professional experience</ApplicationSubTitle>
                <ApplicationText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat quam ut tempor maximus. Sed neque arcu, rhoncus elementum sodales a, tristique sed quam. Aliquam nibh velit, pharetra ac faucibus in, ornare eu tortor. Vestibulum lacus ligula, elementum sit amet purus ut, sagittis molestie ex. In hendrerit orci tellus. Integer pharetra porttitor nulla, nec fringilla dolor ultricies et. Integer accumsan feugiat urna, eu hendrerit dui varius sit amet. Mauris eget tristique turpis. Curabitur eget hendrerit turpis. Etiam rutrum dolor eu posuere vehicula.Pellentesque ut mauris neque. Maecenas posuere sit amet erat at placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Donec tempor lobortis nisl. Maecenas sit amet massa in tortor pulvinar sollicitudin. Fusce vitae feugiat felis, ut malesuada purus. Curabitur felis velit, interdum vitae viverra quis, sagittis ac nulla. Quisque tempus pharetra ornare. In sed nulla eget risus cursus facilisis vel quis nibh. Praesent euismod lectus a.</ApplicationText>
                <ApplicationSubTitle>Why are you interested in working at The company name SA</ApplicationSubTitle>
                <ApplicationText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat quam ut tempor maximus. Sed neque arcu, rhoncus elementum sodales a, tristique sed quam. Aliquam nibh velit, pharetra ac faucibus in, ornare eu tortor. Vestibulum lacus ligula, elementum sit amet purus ut, sagittis molestie ex. In hendrerit orci tellus. Integer pharetra porttitor nulla, nec fringilla dolor ultricies et. Integer accumsan feugiat urna, eu hendrerit dui varius sit amet. Mauris eget tristique turpis. Curabitur eget hendrerit turpis. Etiam rutrum dolor eu posuere vehicula.Pellentesque ut mauris neque. Maecenas posuere sit amet erat at placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Donec tempor lobortis nisl. Maecenas sit amet massa in tortor pulvinar sollicitudin. Fusce vitae feugiat felis, ut malesuada purus. Curabitur felis velit, interdum vitae viverra quis, sagittis ac nulla. Quisque tempus pharetra ornare. In sed nulla eget risus cursus facilisis vel quis nibh. Praesent euismod lectus a.</ApplicationText>
            <div style={{marginTop: "10px", display: "flex", justifyContent: "center"}}>
                <CVButton>DOWNLOAD CV</CVButton>
            </div>
            </div>
        </div>        
    )
}