import styled from "@emotion/styled";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const ApplicationsFound = styled("h2")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

const ApplicationText = styled("p")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  margin-right: 10px;
`;

const ApplicationsmmLetter = styled("p")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1px;
  color: #616161;
`;

const ApplicationSubTitle = styled("h3")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #bf5f82;
  margin: 10px 0 16px;
`;

const DeclineButton = styled("button")`
  padding: 8px 16px;
  gap: 8px;
  width: 116px;
  height: 40px;
  background: #bf5f82;
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
  border: 1px solid #f48fb1;
`;

const MorDetailsButton = styled("button")`
  font-family: "Inter";
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

export default function CandidatesComponent({ candidate }) {
  const [detailsOpen, setDetailsOpen] = useState("none");

  function ExpandedButton(selected) {
    if (selected === detailsOpen) {
      return setDetailsOpen("none");
    }
    setDetailsOpen(selected);
  }

  return (
    <div
      style={{
        marginTop: "8px",
        marginBottom: "16px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
        border: "1px solid #E1E2E1",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          widht: "100%",
          alignItems: "center",
          padding: "5px 10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <ApplicationsFound>{candidate?.name}</ApplicationsFound>
            <ApplicationsmmLetter style={{ marginRight: "10px" }}>
              {candidate?.job_type}
            </ApplicationsmmLetter>
          </div>
        </div>
        <div>
          <ApplicationsmmLetter style={{ width: "80px", textAlign: "center" }}>
            {candidate?.email}
          </ApplicationsmmLetter>
          <ApplicationsmmLetter style={{ width: "80px", textAlign: "center" }}>
            {candidate?.phone}
          </ApplicationsmmLetter>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <ApplicationsmmLetter
              style={{ width: "80px", textAlign: "center" }}
            >
              Sent 1 day ago
            </ApplicationsmmLetter>
            <ApplicationsmmLetter
              style={{ width: "80px", textAlign: "center", color: "#F48FB1" }}
            >
              Waiting for review
            </ApplicationsmmLetter>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <CVButton>MARK AS STARTED</CVButton>
          <MorDetailsButton
            onClick={() => {
              ExpandedButton("hola");
            }}
          >
            <RiArrowDownSLine />
          </MorDetailsButton>
        </div>
      </div>
      <div
        style={{
          padding: "5px 10px",
          display: `${detailsOpen === "hola" ? "flex" : "none"}`,
          flexDirection: "column",
        }}
      >
        <ApplicationSubTitle>Professional experience</ApplicationSubTitle>
        <ApplicationText>{candidate?.experience}</ApplicationText>
        <ApplicationSubTitle>
          Why are you interested in working at The company name SA
        </ApplicationSubTitle>
        <ApplicationText>candidate?.why</ApplicationText>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CVButton>DOWNLOAD CV</CVButton>
        </div>
      </div>
    </div>
  );
}
