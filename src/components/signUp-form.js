import { useState } from "react";
import { Title, Container, LoginText } from "./utils";
import SignUpProfessional from "./signUpProfessional";
import SignUpRecruiter from "./signUpRecruiter";
import Girl from "../styles/img/girlSignUp.svg";
import { useAuth } from "../context/auth-context";

function SignUpForm() {
  const { setLoginError, setSignUpError } = useAuth();
  const [formType, setFormType] = useState("professional");


  return (
    <Container>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Title>Good choice!</Title>

          <LoginText>Create a new account as...</LoginText>

          {formType === "professional" ? (
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
                onClick={() => {
                  setFormType("professional")
                  setLoginError(null)
                  setSignUpError(null)
                }}
              >
                PROFESSIONAL
              </div>
              <div
                style={{ borderBottom: "3px solid #BDBDBD", color: "#8E8E8E" }}
                onClick={() => {
                  setFormType("recruiter")
                  setLoginError(null)
                  setSignUpError(null)
                }}
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
                onClick={() => {
                  setFormType("professional")
                  setLoginError(null)
                  setSignUpError(null)
                }}
              >
                PROFESSIONAL
              </div>
              <div
                style={{ borderBottom: "3px solid #F48FB1" }}
                onClick={() => {
                  setFormType("recruiter")
                  setLoginError(null)
                  setSignUpError(null)
                }}
              >
                RECRUITER
              </div>
            </div>
          )}
        </div>

        {formType === "professional" ? (
          <SignUpProfessional />
        ) : (
          <SignUpRecruiter />
        )}
      </div>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <img src={Girl} alt="Girl" height={"72%"} />
      </div>
    </Container>
  );
}

export default SignUpForm;
