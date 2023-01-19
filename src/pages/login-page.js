import styled from "@emotion/styled";
import { useState } from "react";
import LoginForm from "../components/login-form";
import PersonWithPlant from "../styles/img/personWithPlant.svg";

const LoginTitle = styled("h1")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
  margin-bottom: 16px;
  margin-top: 40px;
`;

const LoginText = styled("p")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 23px;
`;

export default function LoginPage() {
  const [loginType, setLoginType] = useState("professional");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
        width: "100pvw",
        background: "#f5f5f6"
      }}
    >
      <div style={{ display: "flex", marginTop: "50px", marginLeft: "50px" }}>
        <div>
          <LoginTitle>Welcome back</LoginTitle>
          <LoginText>Login to you account as...</LoginText>
          {loginType === "professional" ? (
            <div
              style={{
                display: "flex",
                gap: "16px",
                cursor: "pointer",
                margin: "32px 0",
              }}
            >
              <div
                style={{ borderBottom: "3px solid #F48FB1" }}
                onClick={() => setLoginType("professional")}
              >
                PROFESSIONAL
              </div>
              <div
                style={{ borderBottom: "3px solid #BDBDBD", color: "#8E8E8E" }}
                onClick={() => setLoginType("recruiter")}
              >
                RECRUITER
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                gap: "16px",
                cursor: "pointer",
                margin: "32px 0",
              }}
            >
              <div
                style={{ borderBottom: "3px solid #BDBDBD", color: "#8E8E8E" }}
                onClick={() => setLoginType("professional")}
              >
                PROFESSIONAL
              </div>
              <div
                style={{ borderBottom: "3px solid #F48FB1" }}
                onClick={() => setLoginType("recruiter")}
              >
                RECRUITER
              </div>
            </div>
          )}
          <LoginForm type={loginType} />
        </div>
        <img src={PersonWithPlant} alt="person with plant"></img>
      </div>
    </div>
  );
}
