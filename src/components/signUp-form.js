import { useState } from "react";
import { Title, Container } from "./utils"
import SignUpProfessional from "./signUpProfessional";
import SignUpRecruiter from "./signUpRecruiter";

function SignUpForm() {
  const [formType, setFormType] = useState("professional");

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Title>Good choice!</Title>

        {formType === "professional" ? (
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginLeft: "42px",
              cursor: "pointer",
            }}
          >
            <div
              style={{ borderBottom: "3px solid #F48FB1" }}
              onClick={() => setFormType("professional")}
            >
              PROFESSIONAL
            </div>
            <div
              style={{ borderBottom: "3px solid #BDBDBD", color: "#8E8E8E" }}
              onClick={() => setFormType("recruiter")}
            >
              RECRUITER
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginLeft: "42px",
              cursor: "pointer",
            }}
          >
            <div
              style={{ borderBottom: "3px solid #BDBDBD", color: "#8E8E8E" }}
              onClick={() => setFormType("professional")}
            >
              PROFESSIONAL
            </div>
            <div
              style={{ borderBottom: "3px solid #F48FB1" }}
              onClick={() => setFormType("recruiter")}
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
    </Container>
  );
}

export default SignUpForm;
