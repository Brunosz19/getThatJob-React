import styled from "@emotion/styled";
import LogoCompany from "../styles/img/LogoCompany.svg";
import { IoIosArrowBack } from "react-icons/io";
import {
  RiMailLine,
  RiFocus3Line,
  RiUploadLine,
  RiBuilding3Line,
  RiCalendar2Line,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { StyledButton } from "../components/input";

const BackButton = styled("button")`
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

const JobSubTitle = styled("h3")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #bf5f82;
  margin: 10px 0 16px;
`;

const ApplyButton = styled("button")`
  padding: 16px 24px;
  gap: 8px;
  width: 173px;
  height: 56px;
  background: #f48fb1;
  border-radius: 16px;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const JobTitle = styled("h1")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
`;

const JobCreateDate = styled("p")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
`;

const JobData = styled("h4")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.15px;
`;

const FileButton = styled("file")`
  border: none;
  border-radius: 8px;
  width: 80px;
  height: 40px;
  background: #f48fb1;
  cursor: pointer;
  padding: 8px;
  gap: 8px;
  color: white;
  margin-top: 40px;
`;

export default function ApplicationJob() {

  return (
    <div>
      <BackButton>
        <IoIosArrowBack />
        BACK
      </BackButton>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80vw",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              src={LogoCompany}
              alt="Logo company"
              style={{
                boxShadow: "2px 3px 5px 4px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
                marginRight: "20px",
                marginTop: "10px",
              }}
            ></img>
            <div>
              <JobSubTitle style={{ color: "#373737", marginBottom: "0" }}>
                The company name SA
              </JobSubTitle>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    background: "#F48FB1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <RiFocus3Line />
                </div>
                <BackButton>FOLLOWING</BackButton>
              </div>
            </div>
          </div>
          <ApplyButton>
            <RiMailLine style={{ width: "20px", height: "20px" }} />
            APPLY NOW
          </ApplyButton>
        </div>
      </div>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <JobTitle>The Job Title</JobTitle>
        <JobCreateDate>
          <AiOutlineClockCircle />
          Posted 2 days ago
        </JobCreateDate>
        <div style={{ display: "flex", gap: "32px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #F48FB1",
              borderRadius: "8px",
            }}
          >
            <JobData style={{ paddingTop: "8px" }}>Category</JobData>
            <JobSubTitle style={{ color: "#373737", padding: "0 32px" }}>
              <RiBuilding3Line style={{ marginRight: "10px" }} />
              Manufacturing
            </JobSubTitle>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #F48FB1",
              borderRadius: "8px",
            }}
          >
            <JobData style={{ paddingTop: "8px" }}>Type</JobData>
            <JobSubTitle style={{ color: "#373737", padding: "0 32px" }}>
              <RiCalendar2Line style={{ marginRight: "10px" }} />
              Full time
            </JobSubTitle>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #F48FB1",
              borderRadius: "8px",
            }}
          >
            <JobData style={{ paddingTop: "8px" }}>Salary</JobData>
            <JobSubTitle
              style={{
                color: "#373737",
                padding: "0 32px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <RiMoneyDollarCircleLine style={{ marginRight: "10px" }} />
              2,000 - 2,500
            </JobSubTitle>
          </div>
        </div>
        <div style={{ width: "800px", marginTop: "30px" }}>
          <JobSubTitle>Complete your application</JobSubTitle>
          <JobCreateDate>SEND YOUR CV UPDATE</JobCreateDate>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <input type="checkbox" />
            <JobCreateDate>Use current CV</JobCreateDate>
            <input type="checkbox" />
            <JobCreateDate>Upload new CV</JobCreateDate>
          </div>
          <FileButton>
            <RiUploadLine />
            Choosen File
          </FileButton>
          <input type="file" style={{ display: "none" }} />
          <JobCreateDate style={{ marginTop: "10px" }}>
            Only PDF. Max size 5MB
          </JobCreateDate>
          <JobCreateDate style={{ marginBottom: "5px", marginTop: "10px" }}>
            Professional experience (taken from your profile)
          </JobCreateDate>
          <input
            type="text"
            style={{
              border: "1px solid #F48FB1",
              width: "744px",
              height: "70px",
              outline: "none",
            }}
          />
          <JobCreateDate>Between 50 and 1000 characters</JobCreateDate>
          <JobCreateDate style={{ marginBottom: "5px", marginTop: "10px" }}>
            Why are you interested in working at The company name SA
          </JobCreateDate>
          <input
            type="text"
            style={{
              width: "744px",
              border: "1px solid #F48FB1",
              outline: "none",
            }}
          />
          <JobCreateDate>Between 50 and 1000 characters</JobCreateDate>
          <ApplyButton style={{ marginTop: "10px", width: "233px" }}>
            <RiMailLine style={{ width: "20px", height: "20px" }} />
            SEND APPLICATION
          </ApplyButton>
        </div>
      </section>
    </div>
  );
}
